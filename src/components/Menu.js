'use strict'
import React, { Component } from 'react';

import {
  Text,
  ScrollView

} from 'react-native';

var styles = require('./style');

class Menu extends Component {

  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  constructor(props) {
      super(props);
  }

  render() {

    return (

      <ScrollView scrollsToTop={false} style={styles.menu}>

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
    );
  }
};


module.exports = Menu;