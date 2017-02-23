'use strict'
import React, { Component } from 'react'

import {
  Text,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet,
    ListView,
    Image
} from 'react-native'

var styles = require('./style');

var SideMenu = require('react-native-side-menu');

var Menu = require('./Menu');

var MenuButton = require('./MenuButton');

class alertDetailView extends Component {
    constructor(props){
        super(props)
        //console.log(this.props.route.passProps)
        this.passProps = this.props.route.passProps
        this.modified = this.passProps.alert.modified.slice(0,10)
        this.state = {
            loaded: false,
        }
    }
    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
        this.props.navigator.replace({ name: item });
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }
    render(){
        const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;
        return(
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton route={this.props.route} onPress={() => this.toggle()}/>

                <View style={styles.container}>
                    <View style={styles.alertDetail}>
                        <Text style={styles.titleDetail}>{this.passProps.alert.name}</Text>
                        <Text style={styles.descriptionDetail}>
                            {this.passProps.alert.description}
                        </Text>
                        <Text style={styles.descriptionDetail}>Disponibles: {this.passProps.alert.comics.available}</Text>
                        <Text style={styles.modifiedDetail}>Modificado: {this.modified}</Text>
                    </View>

                </View>
            </SideMenu>

    )
    }
}


module.exports = alertDetailView
