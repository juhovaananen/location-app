import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import LoginScreen from './src/screens/LoginScreen';
import LocationListScreen from './src/screens/LocationListScreen';
import AddLocationScreen from './src/screens/AddLocationScreen';
import MapScreen from './src/screens/MapScreen';
import CountriesAndCapitalsScreen from './src/screens/CountriesAndCapitalsScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { user, logout } = useContext(AuthContext); 

  return (
    <Stack.Navigator>
      {user ? (
        
        <>
          <Stack.Screen
            name="LocationList"
            component={LocationListScreen}
            options={{
              title: 'My Locations',
              headerRight: () => (
                <Button
                  title="Logout"
                  onPress={logout} 
                />
              ),
            }}
          />
          <Stack.Screen name="AddLocation" component={AddLocationScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="CountriesAndCapitals" component={CountriesAndCapitalsScreen} />
        </>
      ) : (
        
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider> {}
      <NavigationContainer>
        <AppStack /> {}
      </NavigationContainer>
    </AuthProvider>
  );
}
