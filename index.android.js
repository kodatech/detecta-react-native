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
  ToolbarAndroid,
} from 'react-native'; 

var styles = require('./src/components/style');

import OneSignal from 'react-native-onesignal';

const Login = require('./src/components/loginView')
const Instance = require('./src/components/instanceView')
const Alert = require('./src/components/alertView')
const Details = require('./src/components/alertDetailView')
const Server = require('./src/components/disableServerView')

var NavigatorBarRouteMapper = {
  LeftButton: function (route, navigator, index){
    //console.log('back')
    //if(route.name == 'Login'){

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
    //return null;
    if(index == 0 && route.name === 'Login'){
      return null
    }
    return(
        <View>
        <TouchableHighlight onPress={() => {
            //if(index > 0 ){
             //  navigator.replace(Login);
            //}
            //console.log('logout')
            
          }}>
          <Text style={styles.navbarLogout}>X</Text>
        </TouchableHighlight> 
      </View>
      )
    
  },
  
  Title: function (route, navigator, index){
    if(route.name == 'Login'){
      return null
    }
    return <Text style={styles.navbarTitle}>{route.name}</Text>
  }
}



export default class detecta extends Component {

       /*        componentDidMount(){
        OneSignal.setLogLevel(OneSignal.LOG_LEVEL.DEBUG, OneSignal.LOG_LEVEL.DEBUG); 
    }  */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    

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
      
    }
  }

  constructor(){
    super();
    this.state = {
      actionText: 'Welcome to Detecta'
    }
  }

  onSettingsClick(){
    console.log('Settings Clicked');
  }

  onActionSelected(position){
    this.setState({
      actionText: 'SELECTED' + toolbarActions[position].title 
    })

  }

  componentWillMount() {
        // Sending single tag
        OneSignal.sendTag("key", "Customer One");
    }

  render(){
    return(

      /*<View>
        <ToolbarAndroid
          style={st.toolbar}
          title="Detecta"
          //actions={[{title:'Settings', show:'always'}]}
          actions={toolbarActions}
          onActionSelected={this.onActionSelected.bind(this)}

        />
        <Text style={st.mainText}>{this.state.actionText}</Text>
      </View>*/
      <Navigator style={{backgroundColor:'#fff'}}
        initialRoute={{name:'Login'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
            if(route.sceneConfig){
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight
          }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigatorBarRouteMapper}/>
        }
        />
      
    )
  }
}

const toolbarActions = [
  {title:'', show:'always'},
  {title: 'Instance'},
  {title: 'Logout'}
]

var st = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 50,
  },
  mainText:{
    padding: 20
  }
  
});



AppRegistry.registerComponent('detecta', () => detecta);
