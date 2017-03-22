'use strict'
import {
  StyleSheet
} from 'react-native'

module.exports = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#fafafa'
  },
  containerText: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#424242'
  },
  containerTextDetail: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  navbar: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    color: '#000'
  },
  navbarLogout: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    color: '#000'
  },
  navbarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    color: '#000',
    textAlign: 'center'
  },
  loading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    paddingLeft: 10,
    color: '#a9a9a9',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  listView: {
    paddingTop: 64,
    marginBottom: 49
  },
  backTextWhite: {
    color: '#FFF'
  },
  rowItem: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    height: 50,
    backgroundColor: '#fafafa',
    borderColor: '#cfd8dc',
    borderWidth: 0.5
  },
  rowTitle: {
    color: '#546e7a',
    fontSize: 18,
    paddingLeft: 20
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  itemAfter: {
    minWidth: 20,
    paddingTop: 1,
    paddingRight: 40
  },
  badge: {
    fontSize: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    color: '#ff5722',
    borderRadius: 10,
    paddingTop: 3,
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#ff5722',
    textAlign: 'center'
  },

  alertDetail: {
    marginLeft: 20
  },
  titleDetail: {
    fontSize: 20,
    paddingLeft: 10,
    color: '#546e7a',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  descriptionDetail: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    color: '#546e7a',
    textAlign: 'justify'
  },
  modifiedDetail: {
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: '#546e7a'
  },
  titleLogin: {
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textoBotonLogin:
  {
    color: '#fff',
    fontSize: 18
  },
  botonLogin: {
    width: 300,
    height: 40,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 3,
    borderWidth: 0
  },
  containerLogin: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#546e7a'
  },
  loginBlock: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 60
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#dddddd',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15
  },
  hideTab: {
    width: 0
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    padding: 20,
    backgroundColor: '#455a64'
  },
  item: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 20,
    color: '#fff'
  },
  toolBarContainer: {
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 25,
    marginBottom: 0,
    backgroundColor: '#cfd8dc'
  },

  toolBar: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  sceneName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 0,
    marginLeft: 40,
    color: '#424242',
    textAlign: 'center'
  },

  sidebarName: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 60,
    paddingBottom: 20,
    color: '#fff'
  }
})
