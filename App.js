import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import * as firebase from 'firebase';

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBatJFU1j__Q86l95KLlgKXRjubTLj9bHI",
//     authDomain: "react-app-bfdba.firebaseapp.com",
//     databaseURL: "https://react-app-bfdba.firebaseio.com",
//     projectId: "react-app-bfdba",
//     storageBucket: "react-app-bfdba.appspot.com",
//     messagingSenderId: "873551684149",
//     appId: "1:873551684149:web:d847220c7f9dd2a5abc77c"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Button, Label, Item } from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={styles.container}>
        <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </Item>
            <Button full rounded success style={{ marginTop:30 }}>
                <Text>Login</Text>
            </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20
    }
})

