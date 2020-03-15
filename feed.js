import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles/styles'

class Feed extends React.Component {
    render() {
      
      if (this.props.route.params.data) {
        console.log(this.props);  
      } else {
        console.log('Nothing');
      }
        return (
            <View style={styles.center}>
              <Text style={styles.title}>Navigation Drawer</Text>
              <Button
                title='Go Detail'
                onPress={() => this.props.navigation.navigate('Detail', {ScreenName: "Detail Page"})}
              />
            </View>
        );
    }
}    
export default Feed;