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
    return (
      <View style={styles.menuButton} >
        <TouchableOpacity 
          onPress={this.handlePress.bind(this)}

          style={this.props.style}>
          <Text>{this.props.children}</Text>
          <Image
            source={{ uri: 'http://i.imgur.com/vKRaKDX.png', width: 40, height: 40, }} />        
        </TouchableOpacity>      
      </View>
    );
  }
}


module.exports = MenuButton;