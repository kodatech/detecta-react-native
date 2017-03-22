'use strict'
import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import styles from './style'
import Menu from './Menu'
import MenuButton from './MenuButton'

class disableServerView extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.route.passProps)
    this.passProps = this.props.route.passProps
    this.modified = this.passProps.instance.modified.slice(0, 10)
    this.state = {
      loaded: false
    }
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
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <MenuButton route={this.props.route} onPress={() => this.toggle()}/>

        <View style={styles.container}>
            <Text>
                Disable: {this.passProps.instance.name}
            </Text>
        </View>

      </SideMenu>
    )
  }
}

module.exports = disableServerView
