import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    /*fetch('./static/data/info.json').then(rs => rs.json()).then(rs => {
      console.log(rs)
    });*/
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        console.log('成功：', request.responseText);
      } else {
        console.log('出错撩');
      }
    };

    request.open('GET', 'https://mywebsite.com/endpoint/');
    request.send();
  }
  render() {
    return (
      <View>
        <Text>Text</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);