import React, {Component} from 'react'
import {AppRegistry, Text, ListView, View} from 'react-native'

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'])
    };
  }
  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);