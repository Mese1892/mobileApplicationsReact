/**
 * Created by Cata on 11/23/2017.
 */

import * as React from "react/cjs/react.production.min";
import {Text, TextInput, View, Linking, Button} from "react-native";
export default class Email extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mail: "",
            subject: "Favourite teams.",
            text: ""
        }
    }

    sendEmail = () => {
        let mail = this.state.mail;
        let subject = this.state.subject;
        let text = this.state.text;

        Linking.openURL("mailto:" + JSON.stringify(mail) +
            "?subject=" + JSON.stringify(subject) +
            "&body=" + JSON.stringify(text));

    }

    render() {
        return (
            <View>
                <View>
                    <Text style={{fontWeight: 'bold', color:"#3498db",fontSize:20}}>
                        Email Address:
                    </Text>
                    <TextInput
                        onChangeText={(mail) => this.setState({mail})}
                        value={this.state.mail}
                    />
                </View>
                <View>
                    <Text style={{fontWeight: 'bold', color:"#3498db",fontSize:20}}>
                        Favourite teams:
                    </Text>
                    <TextInput
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
                <Button onPress={this.sendEmail}
                        title={"Send me an email"}/>
            </View>
        )
    }
}
