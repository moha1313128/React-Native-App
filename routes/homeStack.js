import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/detail';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home : {
        screen: Home,
        navigationOptions: {
            headerTitle: () => <Header />,
            // title: 'WebDevMa',
            // headerStyle: { backgroundColor: '#fff'}
        }
    },
    Details : {
        screen: Details,
        // navigationOptions: {
        //     // title: 'Details',
        //     // headerStyle: { backgroundColor: '#fff'}
        // }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        // headerTintColor: '#444',
        // headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;