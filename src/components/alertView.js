'use strict'
import React, { Component } from 'react';

import {
  Text,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

const REQUEST_URL = "http://gateway.marvel.com:80/v1/public/characters";

var Crypto = require('crypto-js');

var styles = require('./style');

var AlertDetail = require('./alertDetailView');

var SideMenu = require('react-native-side-menu');

var Menu = require('./Menu');

var MenuButton = require('./MenuButton');



class alertView extends Component {
    constructor(props){
        super(props);
        this.timestamp = 1;
        this.public_key = '45ecdcaeb78978d778efd8847d848127';
        this.private_key =  'eeceb71751be29a622067d9929cb6ae3fab323e3';
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2
            }),
            loaded: false 
        }
    }
    
    componentDidMount(){
        this.fetchData(); 
    }
    fetchData(){
        var hash = Crypto.MD5(this.timestamp + this.private_key + this.public_key);
        fetch(REQUEST_URL+'?ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+hash).then((response) => response.json()).then((responseData) => this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
            loaded: true
        }))
    }
    
    renderLoadingView(){
        return(
        <View style= {styles.loading}>
            <Text style={{}}>Loading....</Text>
        </View>)
    }
    onAlertPressed(alert){
    
        this.props.navigator.push({
            name: 'Details',
            title: alert.name,
            passProps: {alert: alert}
        })
    }
    renderAlert(alert){
        
        return(
        	
        	<TouchableHighlight style={styles.rowFront} onPress={()=>this.onAlertPressed(alert)}>
        		
		            <View style={styles.rowItem}>
			            <View style={styles.rightContainer}>
			                <Text style={styles.title}>{alert.name} </Text>
			                
			            </View>
			            
			            
					</View>
				
	        </TouchableHighlight>
	        
	        
        )
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

        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return(

            <SideMenu   
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton onPress={() => this.toggle()}/>
                <ListView 
                	style={styles.container}
    				dataSource={this.state.dataSource}
    				renderRow={this.renderAlert.bind(this)}
    		    />
            
			</SideMenu>
        )
    }
}






module.exports = alertView;