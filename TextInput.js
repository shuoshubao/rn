import React, {Component} from 'react'
import {AppRegistry, Text, TextInput, View} from 'react-native'

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    const {text} = this.state;
    return (
      <View style={{padding: 50}}>
        <TextInput
          placeholder="placeholder"
          style={{height: 50}}
          onChangeText={(text) => {
            this.setState({text})
          }}
        />
        <Text>{text ? `你输入了：${text.split(' ').join(',')}` : '请输入内容'}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
