import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Platform, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import useAuth from '../contexts/AuthContext';
import { router } from 'expo-router';
import { Link } from 'expo-router';
import StyledText from '@/components/styled/StyledTextComponent';
import StyledButton from '@/components/styled/StyledButtonComponent';
import StyledInputComponent from '@/components/styled/StyledInputComponent';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { onRegister } = useAuth();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    };

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Username validation
    if (!username) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = async () => {
    if (validateForm()) {
      const res = await onRegister?.(email, username, password);
      if (res?.error) {
        setErrors({
          ...errors,
          username: res.message,
          email: res.message,
        });
      } else {
        router.replace('/login');
      }
    }
  };

  const handleSubmit = (e?: any) => {
    // Prevent default form submission on web
    if (Platform.OS === 'web') {
      e?.preventDefault();
    }
    handleRegister();
  };

  const formContent = (
    <View style={{display: "flex", flexDirection: "column", gap: 10}}>
    <StyledText style={{ 
            fontSize: 24, 
            fontWeight: 'bold', 
            marginBottom: 20,
            textAlign: 'center'
          }}>
            Create Account
          </StyledText>

          <StyledInputComponent
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setErrors({...errors, email: ''});
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
          />

          <StyledInputComponent
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              setErrors({...errors, username: ''});
            }}
            autoCapitalize="none"
            error={errors.username}
          />

          <StyledInputComponent
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrors({...errors, password: ''});
            }}
            secureTextEntry
            error={errors.password}
          />

          <StyledInputComponent
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setErrors({...errors, confirmPassword: ''});
            }}
            secureTextEntry
            error={errors.confirmPassword}
            onSubmitEditing={handleSubmit}
          />
          
          <View style={{ marginTop: 20 }}>
            <StyledButton
              style={{ alignItems: 'center' }}
              size="lg"
              text="Register"
              onPress={handleSubmit}
              loading={isLoading}
              disabled={isLoading}
            />
          </View>

          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'center',
            marginTop: 10,
            gap: 4
          }}>
            <StyledText>
              Already have an account?
            </StyledText>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <StyledText style={{ 
                  color: Colors.dark.primary,
                  fontWeight: 'bold',
                }}>
                  Login
                </StyledText>
              </TouchableOpacity>
          </Link>
        </View>
    </View>
  )

  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: Colors.dark.background,
      padding: 20,
    }}>
      {Platform.OS === 'web' ? (
        <form 
          onSubmit={handleSubmit}
          style={{ width: '100%', maxWidth: 300, gap: 10, display: "flex", flexDirection: "column" }}
        >
          {formContent}
        </form>
      ) : (
        <View 
          style={{ width: '100%', maxWidth: 300, gap: 10, display: "flex", flexDirection: "column" }}
        >
          {formContent}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.dark.background,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 20,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
  loginLink: {
    color: Colors.dark.tint,
    textAlign: 'center',
    marginTop: 20,
  },
}); 