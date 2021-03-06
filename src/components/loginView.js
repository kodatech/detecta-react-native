'use strict'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native'
import styles from './style'

class loginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usr: 'User',
      pass: 'Password'
    }
  }

  render() {
    return (
      <View style={styles.containerLogin}>
        <View style={styles.loginBlock}>
          <Text style={styles.titleLogin}>Detecta</Text>
          <TextInput
            style={{height: 40, borderColor: '#ddd', color: '#424242', borderWidth: 1, marginTop: 20, paddingLeft: 5, borderRadius: 3 }}
            onChangeText={(usr) => this.setState({usr})}
            value={this.state.usr}
            />
          <TextInput
            style={{height: 40, borderColor: '#ddd', color: '#424242', borderWidth: 1, marginTop: 20, paddingLeft: 5, borderRadius: 3 }}
            onChangeText={(pass) => this.setState({pass})}
            value={this.state.pass}
            />
          <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.botonLogin}>
            <Text style={styles.textoBotonLogin}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  onLogin() {
    Alert.alert(
      'Access',
      "you've logged into the system",
      [{
        text: 'Aceptar',
        onPress: (this.aceptar.bind(this))
      }, {
        text: 'Cancelar',
        onPress: (this.cancelar)
      }]
    )
  }

  aceptar() {
    // console.log('Login aceptado')
    this.props.navigator.replace({
      title: 'Instance',
      name: 'Instance',
      passProps: {}
    })
  }

  cancelar() {
    // console.log('Login cancelado')
  }
}

module.exports = loginView
