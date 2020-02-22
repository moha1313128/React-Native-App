import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'ShowTime', rating: 4, body: 'Watch Move at 21:00 pm', key: '1' },
    { title: 'Dinner', rating: 3, body: 'Dinner at 23:00 pm', key: '2' },
    { title: 'Making App', rating: 5, body: 'Start at 2:00 am', key: '3' },
  ])
  return (
    <View style={globalStyles.container}>
      <FlatList  
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
              <Text style={globalStyles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
