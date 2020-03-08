import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import MessageScreen from './screens/MessageScreen'
import ProfileScreen from './screens/ProfileScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCtpDHz-bXl7-YZnD55pZBpZaEDzc2vsHE",
  authDomain: "reactapp-469de.firebaseapp.com",
  databaseURL: "https://reactapp-469de.firebaseio.com",
  projectId: "reactapp-469de",
  storageBucket: "reactapp-469de.appspot.com",
  messagingSenderId: "1008829778774",
  appId: "1:1008829778774:web:b24d444406c5588d15e4f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
        }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor}></Ionicons>
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-add-circle" size={24} color={tintColor}></Ionicons>
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor}></Ionicons>
      }
    },
    Profile: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor}></Ionicons>
      }
    }
  },
  {
    activeTintColor: "#161F3D",
    inactiveTintColor: "#BBBBC4",
    showLabel: false
  }  
)
const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)