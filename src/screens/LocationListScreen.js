import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { firestore } from '../firebaseConfig'; // Import Firestore
import { collection, onSnapshot } from 'firebase/firestore'; // Import Firestore functions

const LocationListScreen = ({ navigation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'locations'), (snapshot) => {
      const locationsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLocations(locationsData);
    });

    return () => unsubscribe(); // Clean up the subscription
  }, []);

  return (
    <View>
      <FlatList
        data={locations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="View on Map" onPress={() => navigation.navigate('Map', { location: item })} />
          </View>
        )}
      />
      <Button title="Add Location" onPress={() => navigation.navigate('AddLocation')} />
    </View>
  );
};

export default LocationListScreen;