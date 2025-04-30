import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { firestore } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import StarRating from 'react-native-star-rating-widget';
import { AuthContext } from '../context/AuthContext';


const LocationListScreen = ({ navigation }) => {
  const [locations, setLocations] = useState([]);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'locations'), (snapshot) => {
      const allLocations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const userLocations = allLocations.filter(loc => loc.user === user);
      setLocations(userLocations);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Description: {item.description || 'No description'}</Text>

            <Text>Rating:</Text>
            <StarRating
              rating={item.rating || 0}
              onChange={() => {}}
              starSize={20}
              enableSwiping={false}
              enableHalfStar={true}
              animationConfig={{ scale: 1 }}
            />

            <Button
              title="View on Map"
              onPress={() => navigation.navigate('Map', { location: item })}
            />
          </View>
        )}
      />

      <Button title="Add Location" onPress={() => navigation.navigate('AddLocation')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LocationListScreen;
