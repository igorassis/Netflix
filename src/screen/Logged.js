import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Header from './Header'
import Lista from './Lista'
import ListaNovidades from './ListaNovidades'

export default class Logged extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Header />
    
        <View>
          <Text style={styles.textos}> Popular no NetFlix </Text>
          
          <Lista />

        </View>

        <View>
          <Text style={styles.textos}> Lançamentos </Text>
          <ListaNovidades />
        </View>

      </View>

    );
  }
}




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