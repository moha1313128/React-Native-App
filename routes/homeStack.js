import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/detail';

const screens = {
    Home : {
        screen: Home,
        navigationOptions: {
            title: 'WebDevMa',
            headerStyle: { backgroundColor: '#f7515f'}
        }
    },
    Details : {
        screen: Details,
        navigationOptions: {
            title: 'Details',
            headerStyle: { backgroundColor: '#f7515f'}
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        // headerTintColor: '#f7515f',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;