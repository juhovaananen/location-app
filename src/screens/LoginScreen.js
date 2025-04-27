import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    // Simulate a login process
    if (username) {
      await AsyncStorage.setItem('user', username);
      navigation.navigate('LocationList');
    } else {
      Alert.alert('Please enter a username');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;