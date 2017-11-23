/**
 * Created by Cata on 11/23/2017.
 */
import * as React from "react/cjs/react.production.min";
import {Button, View, StyleSheet, Text} from "react-native";
export class MainActivity extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.backround}>
                <View style={styles.buttonBackround}>
                    <Button onPress={() => this.props.navigation.navigate('CustomListView')} title="View teams"/>
                    <Text/>
                    <Text/>
                    <Text/>
                    <Text/>
                    <Text/>
                    <Text/>
                    <Button onPress={() => this.props.navigation.navigate('Email')} title="Send teams"/>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    backround: {
        flex: 1,
        alignItems: 'center',
        margin:20,
    },
    buttonBackround: {
        flex: 1,
        margin:20
    }
});