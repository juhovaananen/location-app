import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { firestore } from '../firebaseConfig'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

const AddLocationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');

  const handleAddLocation = async () => {
    if (name && description && rating) {
      try {
        await addDoc(collection(firestore, 'locations'), {
          name,
          description,
          rating: parseFloat(rating),
        });
        navigation.navigate('LocationList');
      } catch (error) {
        Alert.alert('Error adding location', error.message);
      }
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View>
      <TextInput placeholder="Location Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Rating" value={rating} onChangeText={setRating} keyboardType="numeric" />
      <Button title="Add Location" onPress={handleAddLocation} />
    </View>
  );
};

export default AddLocationScreen;