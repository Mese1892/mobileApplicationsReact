import * as React from "react/cjs/react.production.min";
import {View, Button, TextInput, Text} from "react-native";
export default class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            manager: "",
            stadium: "",
        };
        if (this.props.navigation.state.params.id !== undefined) {
            let team = this.props.navigation.state.params;
            this.state.id = team.id;
            this.state.name = team.name;
            this.state.manager = team.manager;
            this.state.stadium = team.stadium;
        }
    }

    save() {
        let item = this.state;
        console.log(item.id);
        for (let i = 1; i < global.count; i++) {
            console.log(global.teamList[i]);
            if (global.teamList[i].id === item.id) {
                global.teamList[i] = item;
            }
        }
        this.props.navigation.navigate("CustomListView")
    }

    render() {
        return (
            <View style={{alignItems:'center', marginTop:20}}>
                <Text style={{fontWeight: 'bold', color:"#3498db",fontSize:20}}>Team: </Text>
                <TextInput style={{fontWeight: 'bold', color:"#2980b9",fontSize:20}} onChangeText={(name) => this.setState({name})} value={this.state.name}/>
                <Text/>
                <Text style={{fontWeight: 'bold', color:"#3498db",fontSize:20}}> Manager: </Text>
                <TextInput style={{fontWeight: 'bold', color:"#2980b9",fontSize:20}} onChangeText={(manager) => this.setState({manager})} value={this.state.manager}/>
                <Text/>
                <Text style={{fontWeight: 'bold', color:"#3498db",fontSize:20}}> Stadium: </Text>
                <TextInput style={{fontWeight: 'bold', color:"#2980b9",fontSize:20}} onChangeText={(stadium) => this.setState({stadium})} value={this.state.stadium}/>
                <Text/>
                <Button style={{fontWeight: 'bold',fontSize:24, size:150}} title={"Save"} onPress={() => this.save()}/>
            </View>
        )
    }
}