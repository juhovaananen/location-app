import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (!username.trim()) {
      Alert.alert('Please enter a username');
      return;
    }
    login(username);
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
