import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import LocationListScreen from './src/screens/LocationListScreen';
import AddLocationScreen from './src/screens/AddLocationScreen';
import MapScreen from './src/screens/MapScreen';
import CountriesAndCapitalsScreen from './src/screens/CountriesAndCapitalsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LocationList" component={LocationListScreen} />
        <Stack.Screen name="AddLocation" component={AddLocationScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="CountriesAndCapitals" component={CountriesAndCapitalsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;