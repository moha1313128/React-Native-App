import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import * as theme from '../theme';
import { Block, Text } from '../components';

class Dashboard extends Component {
    render() {
        return (
            <Block style={styles.dashboard}>
                <Block column>
                    <Text welcome>welcome</Text>
                    <Text name>John Doe</Text>
                </Block>
                <Block row style={{ paddingVertical: 10 }}>
                    <Block>
                        <Text h1>34</Text>
                    </Block>
                    <Block flex column>
                    <Text caption>Humidity</Text>
                    </Block>
                </Block>

                <Block flex colum>
                    <Block row>

                    </Block>
                </Block>
            </Block>
        )
    }
}


export default Dashboard;
const styles = StyleSheet.create({
    dashboard: {
        padding: theme.sizes.base,
    }
});
