import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeText: '开始计时'
    };
    const pad = (num) => ('0' + num).slice(-2);
    setInterval(() => {
      const dt = new Date;
      const timeText = [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('-') + ' ' + [dt.getHours(), dt.getMinutes(), dt.getSeconds()].map(v => pad(v)).join(':');
      this.setState({
        timeText
      })
    }, 1e3);
  }
  render() {
    let {timeText} = this.state;
    return (
      <Text style={{paddingTop: 100}}>{timeText}</Text>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);