import React, { Component } from 'react';
import { AppRegistry, Navigator, TouchableHighlight, Text, View } from 'react-native';

class MyScene extends Component {
  render() {
    return (
      <View style={{paddingTop: 100}}>
        <Text>当前屏数: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一屏</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我进入上一屏</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: '初始屏', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);