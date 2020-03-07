import { StyleSheet, Text, View } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      // color: '#fff',
      padding: 20,
    },
    title: {
      fontFamily: 'nunito-bold',
      fontSize: 20,
      // color: '#fff'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    cover: {
        ...StyleSheet.absoluteFillObject,
        width: null,
        height: null,
    }
});

export const images = {
  ratings: {
    '1': require('../assets/star-1.png'),
    '2': require('../assets/star-2.png'),
    '3': require('../assets/star-3.png'),
    '4': require('../assets/star-4.png'),
    '5': require('../assets/star-5.png'),
  }
}