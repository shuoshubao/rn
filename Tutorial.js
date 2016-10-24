import React, {Component} from 'react'
import {AppRegistry, Text} from 'react-native'

class AwesomeProject extends Component {
  render() {
    return (
      <Text>hello</Text>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);