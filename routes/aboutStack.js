import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
    Home : {
        screen: About,
        navigationOptions: {
            title: 'About us',
            headerStyle: { backgroundColor: '#fff'}
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        // headerTintColor: '#f7515f',
        // headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default AboutStack;