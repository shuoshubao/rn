import React, {Component} from 'react'
import {AppRegistry, Text, ScrollView, Image, View} from 'react-native'

class AwesomeProject extends Component {
  render() {
    const source = require('./static/img/logo.png');
    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={source} />
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:80}}>React Native</Text>
        
      </ScrollView>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
