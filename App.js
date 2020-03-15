import React from 'react';
import Feed from './feed';
import Detail from './detail';

import Screen1 from './screens/drawer/screen1';
import Screen2 from './screens/drawer/screen2';
import Screen3 from './screens/drawer/screen3';
import Tab1 from './screens/tabs/Tab1';
import Tab2 from './screens/tabs/Tab2';
import Tab3 from './screens/tabs/Tab3';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Drawer = createDrawerNavigator(); 
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends React.Component {
  createHomeStack = () => 
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} options={{title:"Feed", headerStyle: {backgroundColor: "#e91e63"} }} />
      <Stack.Screen name="Detail" component={Detail} options={{title:"Detail", headerStyle: {backgroundColor: "#e91e63"} }}/>
      <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
      <Stack.Screen name="Top Tabs" children={this.createTopTabs} />
    </Stack.Navigator>

  createTopTabs = (props) => {
    console.log(props);
    return <MaterialTopTabs.Navigator tabBarOptions={{activeTintColor:'#e91e63' }} >
      <MaterialTopTabs.Screen name="Tab 1" component={Tab1} options={{tabBarLabel: 'Profile'}}/>
      <MaterialTopTabs.Screen name="Tab 2" component={Tab2} options={{tabBarLabel: 'Market'}}/>
      <MaterialTopTabs.Screen name="Tab 3" component={Tab3} options={{tabBarLabel: 'About me'}}/>
    </MaterialTopTabs.Navigator>
  }  
  
  createBottomTabs = (props) => {
    console.log(props);
    return <MaterialBottomTabs.Navigator activeColor='#f0edf6' inactiveColor="#3e2465" barStyle={{ backgroundColor: '#e91e63' }}>
      <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} options={{tabBarLabel: null, tabBarIcon: ({color})=>(<MaterialCommunityIcons name="home" color={color} size={26} />)}} />
      <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} options={{tabBarLabel: null, tabBarIcon: ({color})=>(<MaterialCommunityIcons name="bell" color={color} size={26} />)}} />
      <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} options={{tabBarLabel: null, tabBarIcon: ({color})=>(<MaterialCommunityIcons name="account" color={color} size={26} />)}} />
    </MaterialBottomTabs.Navigator>
  } 
  render()
  {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.createHomeStack} />
          <Drawer.Screen name="Conatct" component={Screen1} />
          <Drawer.Screen name="Favorites" component={Screen2} />
          <Drawer.Screen name="Settings" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}