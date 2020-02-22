import { StyleSheet, Text, View } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ea3345',
      alignItems: 'center',
      justifyContent: 'center',
      // color: '#fff',
      padding: 20,
    },
    title: {
      fontFamily: 'nunito-bold',
      fontSize: 20,
      color: '#fff'
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