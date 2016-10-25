/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

export default class rn extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <Text>Hello</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('rn', () => rn);