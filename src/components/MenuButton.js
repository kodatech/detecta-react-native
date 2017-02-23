'use strict'
import React, { Component } from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  Image

} from 'react-native';

var styles = require('./style');

class MenuButton extends Component {



  handlePress(e) {

    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    //console.log(this.props.route)
    return (
      <View style={styles.toolBarContainer} >
        <TouchableOpacity
          onPress={this.handlePress.bind(this)}

          style={styles.toolBar}>

          <Image
            source={{ uri: 'http://i.imgur.com/vKRaKDX.png', width: 20, height: 20}} />

            <Text style={styles.sceneName}>{this.props.route.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


module.exports = MenuButton;
