import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { firestore } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import StarRating from 'react-native-star-rating-widget';
import { AuthContext } from '../context/AuthContext';



const AddLocationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);

  const handleAddLocation = async () => {
    if (!name.trim()) {
      Alert.alert('Please enter a location name');
      return;
    }

    try {
      await addDoc(collection(firestore, 'locations'), {
        name,
        description,
        rating,
        user,
      });

      Alert.alert('Location added!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error adding location:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Location Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Text>Rating:</Text>
      <StarRating rating={rating} onChange={setRating} starSize={30} />

      <Button title="Save Location" onPress={handleAddLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  input: {
    marginBottom: 12,
    borderBottomWidth: 1,
    padding: 8,
  },
});

export default AddLocationScreen;
