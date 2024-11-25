import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
export interface AuthProps {
  authState?: {
    token: string | null;
    authenticated: boolean | null;
    isLoading: boolean;
    user?: {
      id: string;
      username: string;
    };
  };

  onRegister?: (
    email: string,
    username: string,
    password: string
  ) => Promise<any>;
  onLogin?: (username: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "jwt-token";
const USER_KEY = "user";
const API_URL = process.env.EXPO_PUBLIC_API_URL;
const AuthContext = createContext<AuthProps>({});

export default function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthProps["authState"]>({
    token: null,
    authenticated: null,
    isLoading: false,
    user: undefined,
  });

  const setLoading = (isLoading: boolean) => {
    setAuth({
      token: auth?.token ?? null,
      authenticated: auth?.authenticated ?? null,
      isLoading,
      user: auth?.user ?? undefined,
    });
  };

  useEffect(() => {
    const loadTokenAndUser = async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const user = await AsyncStorage.getItem(USER_KEY);
      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        setAuth({ token: token, authenticated: true, isLoading: false, user: user ? JSON.parse(user) : undefined });
      } else {
        setAuth({ token: null, authenticated: false, isLoading: false, user: undefined });
      }
    };

    loadTokenAndUser();
  }, []);

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const response = await axios.post(
        `${API_URL}/auth/register`,
        { email, username, password },
        {
          validateStatus: function (status) {
            return status >= 200 && status < 600;
          },
        }
      );
      if (response.status === 409) {
        throw {
          response: response,
          message: response.data?.message || "Username already exists",
        };
      }
      if (response.status >= 400) {
        throw {
          response: response,
          message: response.data?.message || "Registration failed",
        };
      }
      return response.data;
    } catch (error) {
      return {
        error: true,
        message: (error as Error).message,
      }
    }
  };

  const login = async (username: string, password: string) => {
    console.log('api url', API_URL);
    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/auth/login`,
        { username, password },
        {
          validateStatus: function (status) {
            return status >= 200 && status < 600;
          },
        }
      );

      if (response.status >= 400) {
        throw {
          response: response,
          message: response.data?.message || "Login failed",
        };
      }

      const newAuthState = {
        token: response.data.token,
        authenticated: true,
        isLoading: false,
        user: {
          id: response.data.user._id,
          username: response.data.user.username,
        },
      };

      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      await AsyncStorage.setItem(TOKEN_KEY, response.data.token);
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(newAuthState.user));

      setAuth(newAuthState);

      return response.data;
    } catch (error: any) {
      setAuth({
        token: null,
        authenticated: false,
        isLoading: false,
        user: undefined,
      });

      return {
        error: true,
        message: error.message,
      };
    }
  };

  const logout = async () => {
    setLoading(true);
    await AsyncStorage.removeItem(TOKEN_KEY);

    axios.defaults.headers.common.Authorization = "";

    setAuth({
      token: null,
      authenticated: false,
      isLoading: false,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState: auth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
