/*
import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'

class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text1}>Text</Text>
        <Text style={styles.text2}>Text</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text1: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    color: '#fff'
  },
  text2: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    color: '#fff'
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
*/

import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'

class AwesomeProject extends Component {
  render() {
    return (
      // <View style={{flex: 1}}>
      <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);