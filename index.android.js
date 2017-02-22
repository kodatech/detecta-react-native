/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  
} from 'react-native'; 

var styles = require('./src/components/style');

import OneSignal from 'react-native-onesignal';

const Login = require('./src/components/loginView')
//const Tabs = require('./src/components/tabs')
const Instance = require('./src/components/instanceView')
const Alert = require('./src/components/alertView')
const Details = require('./src/components/alertDetailView')
const Server = require('./src/components/disableServerView')
const Logout =  require('./src/components/logoutView') 
const AboutUs =  require('./src/components/AboutUs') 

var NavigatorBarRouteMapper = {
  LeftButton: function (route, navigator, index){
    //console.log('back')
    //if(route.name == 'Login'){
    //  return null;
    if(index == 0){
      return null
    }
    return(
     <View>
        <TouchableHighlight onPress={() => {
            if(index > 0){
               navigator.pop();
            }
          }}>
          <Text style={styles.navbar}>&lt; Back</Text>
        </TouchableHighlight> 
      </View> 

    )
  },
  RightButton: function (route, navigator, index){
    return null;
    
    
  },
  
  Title: function (route, navigator, index){

    //return null;
    if(route.name == 'Login'){
      return null
    }
    return <Text style={styles.navbarTitle}>{route.name}</Text>
  }
}

var prueba = {
  LeftButton: function (route, navigator, index){
    return null
    
  },
  RightButton: function (route, navigator, index){
    return null;
    
    
  },
  
  Title: function (route, navigator, index){

    //return null;
    if(route.name == 'Login'){
      return null
    }
    return <Text style={styles.navbarTitle}>{route.name}</Text>
  }
}



export default class detecta extends Component {

  constructor(props){
    super(props);
    this._setNavigatorRef = this._setNavigatorRef.bind(this);
    
    
  }
   

  renderScene(route, navigator){
    
    switch (route.name){
      case 'Login':
        return (
          <Login {...route.props} navigator={navigator} route={route}></Login>
        );
      case 'Instance':
        return (
          <Instance {...route.props} navigator={navigator} route={route}></Instance>
        );
      case 'Alert':
        return (
          <Alert {...route.props} navigator={navigator} route={route}></Alert>
        );
      case 'Details':
        return (
          <Details {...route.props} navigator={navigator} route={route}></Details>
        );
      case 'Server':
        return (
          <Server {...route.props} navigator={navigator} route={route}></Server>
        );
      case 'Logout':
        return (
          <Logout {...route.props} navigator={navigator} route={route}></Logout>
        );
      case 'AboutUs':
        return (
          <AboutUs {...route.props} navigator={navigator} route={route}></AboutUs>
        );
      
    }
  }

  
  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }

  componentWillMount() {
        // Sending single tag
        OneSignal.sendTag("key", "Customer One"); 
    }

  _setNavigatorRef(navigator) {
    if (navigator !== this._navigator) {
      this._navigator = navigator;

      if (navigator) {
        var callback = (event) => {
          console.log(
            `NavigatorMenu: event ${event.type}`,
            {
              route: JSON.stringify(event.data.route),
              target: event.target,
              type: event.type,
            }
          );
        };
        // Observe focus change events from the owner.
        this._listeners = [
          navigator.navigationContext.addListener('willfocus', callback),
          navigator.navigationContext.addListener('didfocus', callback),
        ];
      }
    }
  }

  render(){
    return(

      //prueba navigator in sideMenu
      <Navigator 
        ref={this._setNavigatorRef}
        style={{backgroundColor:'#fff'}}
        initialRoute={{name:'Login'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
            if(route.sceneConfig){
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight
          }}
          
        /*navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigatorBarRouteMapper}/>
        }*/
        />
      
    )
  }
}



var st = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 50,
  },
  mainText:{
    padding: 20
  },

  
});



AppRegistry.registerComponent('detecta', () => detecta);
