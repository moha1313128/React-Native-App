import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles/styles'

class Detail extends React.Component {
    render() {
        return (
            <View style={styles.center}>
              <Text style={styles.title}>{this.props.route.params.ScreenName}</Text>
                <Button
                  title='View Bottom Tabs'
                  onPress={() => this.props.navigation.navigate('Bottom Tabs', {name: "param 1"})}
                />
                <Button
                  title='View Top Tabs'
                  onPress={() => this.props.navigation.navigate('Top Tabs', {name: "param 2"})}
                />
                <Button
                  title='Pass Data'
                  onPress={() => this.props.navigation.navigate('Feed', {data: "Passing Data"})}
                />              
            </View>
        );
    }
}    
export default Detail;