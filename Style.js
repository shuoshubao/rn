import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View} from 'react-native'

class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Text style={styles.orange}>orange</Text>
        <Text style={styles.red}>red</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  orange: {
    color: 'orange',
    fontSize: 30
  },
  red: {
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);