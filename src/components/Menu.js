'use strict'
import React, { Component } from 'react'
import {
  Text,
  ScrollView
} from 'react-native'
import styles from './style'

class Menu extends Component {
/*
  constructor(props) {
      super(props)
      //console.log('menu')
      //console.log(this.props.route)
  }
*/

  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <Text
          style={styles.sidebarName}>
          Detecta
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Instance')}
          style={styles.item}>
          Instance
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('AboutUs')}
          style={styles.item}>
          About Us
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Logout')}
          style={styles.item}>
          Logout
        </Text>
      </ScrollView>
    )
  }
}

module.exports = Menu
