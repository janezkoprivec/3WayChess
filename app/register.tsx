import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Colors } from '../constants/Colors';
import StyledInputComponent from '../components/styled/StyledInputComponent';
import StyledButtonComponent from '../components/styled/StyledButtonComponent';
import useAuth from '../contexts/AuthContext';
import { router } from 'expo-router';

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

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>
        
        <StyledInputComponent
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
        />

        <StyledInputComponent
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          error={errors.username}
        />

        <StyledInputComponent
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={errors.password}
        />

        <StyledInputComponent
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          error={errors.confirmPassword}
        />

        <StyledButtonComponent
          size="lg"
          text="Register"
          onPress={handleRegister}
          style={styles.button}
        />

        <Text 
          style={styles.loginLink}
          onPress={() => router.replace('/login')}
        >
          Already have an account? Login
        </Text>
      </View>
    </ScrollView>
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