'use strict'
import React, { Component } from 'react'

import {
  Text,
    View,
    
} from 'react-native'

var styles = require('./style');

class disableServerView extends Component {
    constructor(props){
        super(props)
        console.log(this.props.route.passProps)
        this.passProps = this.props.route.passProps
        this.modified = this.passProps.instance.modified.slice(0,10)
    }
    render(){
        return(
            
                <View style={styles.container}>
                    
                    <Text>
                        Disable: {this.passProps.instance.name}
                    </Text>
                    
                </View>

           
        
    )
    }
}


module.exports = disableServerView