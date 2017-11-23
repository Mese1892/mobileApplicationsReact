import React from 'react';
import{ View, ListView, TouchableOpacity, Text} from 'react-native';

export default class CustomListView extends React.Component {

    constructor(props) {
        super(props);
        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.Id !== r2.Id});
        this.state = {dataSource: dataSource.cloneWithRows(global.teamList)}
    }

    edit(item) {
        this.props.navigation.navigate("ItemDetail", item);
    }

    renderRow(item) {
        return (
            <TouchableOpacity onPress={() => this.edit(item)}>
                <View>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
            </View>
        );
    }
}