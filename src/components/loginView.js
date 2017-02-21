'use strict'
import React, { Component } from 'react';

import  {
	StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  Image,
  TextInput,
  
} from 'react-native';

var styles = require('./style');

class loginView extends Component{

	constructor(props) {
	    super(props);
	    this.state = { usr: 'User',
	    pass: 'Password'};
	  }

	render(){

		return(
			<View style={styles.containerLogin}>
				<View >
					<Text style={styles.titleLogin}>Detecta</Text>
					<TextInput
				        style={{height: 40, borderColor: 'gray', borderWidth: 0}}
				        onChangeText={(usr) => this.setState({usr})}
				        value={this.state.usr}
				    />
				    <TextInput
				        style={{height: 40, borderColor: 'gray', borderWidth: 0}}
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

	onLogin(){
		Alert.alert(
			'Access',
			"you've logged into the system",
			[
				{
					text: 'Aceptar',
					onPress: (this.aceptar.bind(this))
					
				},
				{
					text: 'Cancelar',
					onPress: (this.cancelar)
				}

			]
		)
	}

	aceptar(){
		//console.log('Login aceptado')
		this.props.navigator.replace({
			title: 'Instance',
			name: 'Instance',
			passProps: {}
		});
	}

	cancelar(){
		//console.log('Login cancelado')
	}


}



module.exports = loginView;