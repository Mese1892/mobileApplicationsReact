/**
 * Created by Cata on 11/23/2017.
 */
import * as React from "react/cjs/react.production.min";
import {Button, View} from "react-native";
export class MainActivity extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Button onPress={()=>this.props.navigation.navigate('CustomListView')} title="View teams"/>
                <Button onPress={()=>this.props.navigation.navigate('Email')} title="Send teams"/>
            </View>
        )
    }

}