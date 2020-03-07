import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/detail';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home : {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='WebDevMa' />,
            }
        }
    },
    Details : {
        screen: Details,
        navigationOptions: {
            title: 'Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        title: 'Centered',
        headerTitleAlign: 'center',
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;