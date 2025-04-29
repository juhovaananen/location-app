import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { firestore } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import StarRating from 'react-native-star-rating-widget';

const AddLocationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddLocation = async () => {
    if (!name.trim()) return Alert.alert('Please enter a location name');
    if (!description.trim()) return Alert.alert('Please enter a description');
    if (rating <= 0) return Alert.alert('Please select a rating');

    try {
      await addDoc(collection(firestore, 'locations'), {
        name,
        description,
        rating,
      });
      Alert.alert('Location added!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error adding location');
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Location name"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />

      <Text style={{ marginBottom: 5 }}>Rating:</Text>
      <StarRating
        rating={rating}
        onChange={setRating}
        starSize={30}
        maxStars={5}
        enableHalfStar={true}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Add Location" onPress={handleAddLocation} />
      </View>
    </View>
  );
};

export default AddLocationScreen;
