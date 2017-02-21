'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

	container: {
    	marginTop: 63,
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    /****index.android.js****/
    welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	navbar: {
		fontSize: 16,
    	fontWeight: 'bold',
		marginTop:10, 
		marginLeft:20,
		color:'#000',
	},
	navbarLogout:{
		fontSize: 16,
    	fontWeight: 'bold',
		marginTop:10, 
		marginLeft:20,
		color:'#000',
	},
	navbarTitle: {
		fontSize: 16,
    	fontWeight: 'bold',
		marginTop:10, 
		marginLeft:20,
		color:'#000',
		textAlign: 'center'
	},
	/****end  index.android.js****/
	loading:{
    	flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title:{
        fontSize: 20,
        paddingLeft: 10,
        color: '#a9a9a9',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    listView:{
        paddingTop: 64,
        marginBottom: 49
    },
    backTextWhite: {
		color: '#FFF',

	},
	rowItem: {
		flexDirection: 'row',
		paddingTop: 3,
		paddingBottom: 3,
		height:60,
		backgroundColor: '#f5f5dc',
    	borderColor: '#deb887',
    	borderWidth: 0.5,


	},
	rightContainer: {
		flex: 1,
		flexDirection: 'column',
	},
	itemAfter: {
		minWidth: 20,
		paddingTop: 1,
		paddingRight: 40,
	},
	badge: {
		fontSize: 10,
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		flexDirection:'row',
		color: '#fff',
		backgroundColor: '#ff8c00',
		borderRadius: 20,
		paddingTop: 0,
		height: 20,
		lineHeight: 20,
		width: 20,
		borderWidth: 0.5,
		borderColor: '#d3313a',
		textAlign: 'center',
	},
	/****alertDetailView****/
	containerDetail: {
        marginTop: 63,
        flex: 1,
        backgroundColor: '#f5f5dc'
    },
    alertDetail:{
        marginLeft: 20
    },
    titleDetail:{
        fontSize: 20,
        paddingLeft: 10,
        color: '#a9a9a9',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    descriptionDetail:{
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        color: '#a9a9a9',
        textAlign: 'justify',
    },
    modifiedDetail:{
        marginTop: 10,
        paddingLeft: 10,
        fontSize: 16,
        color: '#a9a9a9',
    },
    /**************/
    titleLogin:{
		marginTop: 100,
		fontSize: 25,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	textoBotonLogin:
	{
		color: 'white'
	},
	botonLogin:{
		width:300,
		height:30,
		backgroundColor: '#ff8c00',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 60,
		marginBottom: 10,
		borderRadius: 8,
		borderWidth: 1
	},
	containerLogin:{
		flex: 1,
		alignItems: 'center',
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	},
	hideTab: {
		width: 0
	},
	menu: {
      flex: 1,
      width: window.width,
      height: window.height,
      padding: 20,
    },
    item: {
      fontSize: 16,
      fontWeight: '300',
      paddingTop: 60,
  }, 
  menuButton: {
        //paddingTop: 5,
        paddingLeft: 20,
        marginTop:2,
        height:1,

        
    }, 

});