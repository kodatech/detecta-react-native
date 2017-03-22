'use strict'
import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Alert,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import Crypto from 'crypto-js'
import styles from './style'
import AlertDetail from './alertDetailView'
import Menu from './Menu'
import MenuButton from './MenuButton'

const REQUEST_URL = "http://gateway.marvel.com:80/v1/public/characters"

class alertView extends Component {
  constructor(props) {
    super(props)
    this.timestamp = 1
    this.publicKey = '45ecdcaeb78978d778efd8847d848127'
    this.privateKey = 'eeceb71751be29a622067d9929cb6ae3fab323e3'
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const hash = new Crypto.MD5(this.timestamp + this.privateKey + this.publicKey)
    fetch(REQUEST_URL + '?ts=' + this.timestamp + '&apikey=' + this.publicKey + '&hash=' + hash).then((response) => response.json()).then((responseData) => this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
      loaded: true
    }))
  }

  renderLoadingView() {
    return (
      <View style= {styles.loading}>
        <Text>Loading....</Text>
      </View>
    )
  }
  onAlertPressed(alert) {
    this.props.navigator.push({
      name: 'Details',
      title: alert.name,
      passProps: {alert: alert}
    })
  }

  renderAlert(alert) {
    return (
      <TouchableHighlight style={styles.rowFront} onPress={() => this.onAlertPressed(alert)}>
        <View style={styles.rowItem}>
          <View style={styles.rightContainer}>
            <Text style={styles.rowTitle}>{alert.name} </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item
    })
    this.props.navigator.replace({ name: item })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen })
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>

    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <MenuButton route={this.props.route} onPress={() => this.toggle()}/>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderAlert.bind(this)}
          />
       </SideMenu>
    )
  }
}

module.exports = alertView
