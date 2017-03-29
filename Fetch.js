import React, {Component} from 'react'
import {
  AppRegistry,
  Text,
  ListView,
  View,
  StyleSheet
} from 'react-native'


const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

class rn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }
  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then(rs => rs.json())
    .then(rs => {
      this.setState({
        dataSource: ds.cloneWithRows([...rs.movies, ...rs.movies, ...rs.movies])
      })
    })
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={item => (
          <View style={styles.wrap}>
            <Text style={styles.item}>{`标题: ${item.title}`}</Text>
            <Text style={styles.item}>{`${item.releaseYear}年`}</Text>
          </View>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  item: {
    lineHeight: 30
  }
})

AppRegistry.registerComponent('rn', () => rn)