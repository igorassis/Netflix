

import React, {Component} from 'react';
import {View, StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';
import './src/config/StatusBar'
import Logged from './src/screen/Logged'
import HomeScreen from './src/screen/HomeScreen'
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation'


export default class App extends Component {
  
  render() {
    return (
      
      <View style={styles.container}>

     
      <MyApp/>

      </View>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Logged: {
    screen: Logged,
  }, 
},{
  contentComponent: CustomDrawerComponent,
  drawerWidth: 300
})

const MyApp = createAppContainer(MyDrawerNavigator);


const CustomDrawerComponent = (props) => (
 
  <SafeAreaView style={{flex:1}}>
  <ScrollView>
 
    
      <DrawerItems {...props} />

      </ScrollView>
  </SafeAreaView>
 
)




const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black' 
  },
  textos:{
    fontSize: 18, 
    fontWeight: '500', 
    color: 'white',
    marginHorizontal: 15, 

  }
})
