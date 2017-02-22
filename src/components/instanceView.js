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
    TouchableOpacity,
    ScrollView,
    Button,
    

} from 'react-native';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

const REQUEST_URL = "http://gateway.marvel.com:80/v1/public/characters";

var SideMenu = require('react-native-side-menu');

var Crypto = require('crypto-js');

var styles = require('./style');

var Menu = require('./Menu');

var MenuButton = require('./MenuButton');


class instanceView extends Component {
    constructor(props){

        super(props);
        this.timestamp = 1;
        this.public_key = '45ecdcaeb78978d778efd8847d848127';
        this.private_key =  'eeceb71751be29a622067d9929cb6ae3fab323e3';
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2							
            }),
            loaded: false,

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
            <Text style={{}}>Loading ......</Text>
        </View>)
    }
   
    onInstancePressed(){
    
        this.props.navigator.push({
            name: 'Alert',
            title: 'Alert',
            passProps: {}
        })
    }

    renderInstance(instance){
        return(
           	<TouchableHighlight onPress={()=>this.onInstancePressed()}>
        		
		            <View style={styles.rowItem}>
			            <View style={styles.rightContainer}>
			                <Text style={styles.title}>{instance.name} </Text>
			                
			            </View>
			            
			            <View style={styles.itemAfter}>
							    <Text style={styles.badge}>{instance.comics.available}</Text> 
						</View>
					</View>
				
	        </TouchableHighlight>

	       
        )
    }
   
    renderHidden(instance){
        return (
            <View style={styles.rowBack}>
                <TouchableOpacity onPress={()=> this._deleteRow(instance) }>
                    <Text style={styles.backTextWhite}>Left</Text>
                </TouchableOpacity> 
            </View>
        )
    }



    _deleteRow(instance){
        this.props.navigator.push({
            name: 'Server',
            title: instance.name,
            passProps: {instance: instance}
        })
        //console.log('disable server')
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
        //const menu = <View style={styles.menu}><Text style={styles.item}>Item 1</Text><Text style={styles.item}>Item 2</Text></View>;
        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return(

            <SideMenu	
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton onPress={() => this.toggle()}/>
                <SwipeListView
                        style={styles.container}
                        dataSource={this.state.dataSource}

                        //renderRow={this.renderMovie}
                        renderRow={this.renderInstance.bind(this)}
                        renderHiddenRow={this.renderHidden.bind(this)}
                        leftOpenValue={75}
                        //rightOpenValue={-150}
                        disableLeftSwipe
                        
                    />
            
            </SideMenu>
			
        )
    }
}





module.exports = instanceView;