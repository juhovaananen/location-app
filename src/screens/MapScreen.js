import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = ({ route }) => {
  const { location } = route.params; // location.name is expected
  const [coords, setCoords] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const geocodeLocation = async () => {
      try {
        const result = await Location.geocodeAsync(location.name);
        if (result.length > 0) {
          setCoords(result[0]);
        } else {
          setErrorMsg('Location not found.');
        }
      } catch (err) {
        setErrorMsg('Error fetching location.');
      }
    };

    geocodeLocation();
  }, [location]);

  if (errorMsg) return <Text>{errorMsg}</Text>;
  if (!coords) return <ActivityIndicator size="large" />;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: coords.latitude, longitude: coords.longitude }}
          title={location.name}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
