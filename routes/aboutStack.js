import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home : {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About' />,
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        title: 'Centered',
        headerTitleAlign: 'center',
        headerTintColor: '#f7515f',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default AboutStack;