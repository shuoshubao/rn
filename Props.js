/*
import React, {Component} from 'react'
import {AppRegistry, Image} from 'react-native'

class AwesomeProject extends Component {
  render() {
    return (
      <Image
        source={{
          uri: 'https://avatars2.githubusercontent.com/u/8306792?v=3&s=466'
        }}
        style={{
          width: 250,
          height: 250
        }}
      />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
*/


import React, {Component} from 'react'
import {AppRegistry, View, Text} from 'react-native'

class Item extends Component {
  render() {
    return (
      <Text>Hello, {this.props.name}</Text>
    )
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Item name="硕鼠宝" />
        <Item name="书包" />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);