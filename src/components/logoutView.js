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

class logoutView extends Component {
    /*constructor(props){
        super(props)
        //console.log(this.props.route.passProps)
        this.passProps = this.props.route.passProps
        this.modified = this.passProps.logout.modified.slice(0,10)
    }*/
    render(){
        return(
           /* <View style={styles.containerDetail}>
                <View style={styles.alertDetail}>
                    <Text style={styles.titleDetail}>{this.passProps.alert.name}</Text>
                    <Text style={styles.descriptionDetail}>
                        {this.passProps.alert.description}
                    </Text>
                    <Text style={styles.descriptionDetail}>Disponibles: {this.passProps.alert.comics.available}</Text>
                    <Text style={styles.modifiedDetail}>Modificado: {this.modified}</Text>
                </View>

            </View>*/
            <Text>logoutView</Text>
        
    )
    }
}


module.exports = logoutView