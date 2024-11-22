import { View, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import StyledInputComponent from '../components/styled/StyledInputComponent';
import StyledText from '../components/styled/StyledTextComponent';
import StyledButton from '../components/styled/StyledButtonComponent';
import { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import useAuth from '@/contexts/AuthContext';

export default function LoginScreen() {
  const auth = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (auth.authState?.authenticated) {
      router.push("/");
    }
  }, [auth.authState]);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await auth.onLogin?.(email, password);
      if (result?.error) {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: Colors.dark.background,
      padding: 20,
    }}>
      <View style={{ width: '100%', maxWidth: 300, gap: 10 }}>
        <StyledText style={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          marginBottom: 20,
          textAlign: 'center'
        }}>
          Welcome Back
        </StyledText>

        <StyledInputComponent
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setError('');
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          error={error}
        />

        <StyledInputComponent
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setError('');
          }}
          secureTextEntry
          error={error}
        />
        
        <View style={{ marginTop: 20 }}>
          <StyledButton
            style={{ alignItems: 'center' }}
            size="lg"
            text="Log In"
            onPress={handleLogin}
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
            Don't have an account?
          </StyledText>
          <Link href="/register" asChild>
            <TouchableOpacity>
              <StyledText style={{ 
                color: Colors.dark.primary,
                fontWeight: 'bold',
              }}>
                Register
              </StyledText>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
} 