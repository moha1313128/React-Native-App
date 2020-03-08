import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Overview from '../screens/Overview';
import  Analytics from '../screens/Analytics';
import Chat from '../screens/Chat';
import Service from '../screens/Service';
import Settings from '../screens/Settings';
import Map from '../screens/Map';
import Vehicles from '../screens/Vehicles';

export default AuthStack = createDrawerNavigator({
    Overview,
    Analytics,
    Chat,
    Service,
    Settings,
    Map,
    Vehicles,
}, {
    header: null
});
