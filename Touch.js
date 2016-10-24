import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, Text } from 'react-native';

class AwesomeProject extends Component {
  handlePress() {
    console.log(1);
  }
  render() {
    return (
      <TouchableHighlight onPress={this.handlePress}>
        <Text>Press Me</Text>
      </TouchableHighlight>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);