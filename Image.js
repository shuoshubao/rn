import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./static/img/logo.png')}
        />
        <Image
          // source={{uri: './static/img/logo.png'}}
          source={{uri: 'https://avatars2.githubusercontent.com/u/8306792?v=3&s=466'}}
          style={{width: 100, height: 100}}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);