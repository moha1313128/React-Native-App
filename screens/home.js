import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'ShowTime', rating: 4, body: 'Watch Move at 21:00 pm', key: '1' },
    { title: 'Dinner', rating: 3, body: 'Dinner at 23:00 pm', key: '2' },
    { title: 'Making App', rating: 5, body: 'Start at 2:00 am', key: '3' },
  ])
  return (
    <View style={globalStyles.container} >
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons 
            name='close'
            size={24}
            style={{ ...styles.modalToggel, ...styles.modalClose}}
            onPress={()=>setModalOpen(false)}
          />
          <Text>Welcome To our App :-)</Text>
        </View>
      </Modal>
      <MaterialIcons 
        name='add'
        size={24}
        style={styles.modalToggel}
        onPress={()=>setModalOpen(true)}
      />
      <FlatList  
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
              <Card>
                <Text style={globalStyles.title}>{item.title}</Text>
              </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggel: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  }, 
  modalContent: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})
