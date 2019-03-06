import React, { Component } from 'react';
import { View,Image, StyleSheet,TouchableOpacity, Text, TextInput} from 'react-native';
import Logo from '../assets/img/netflixballon.gif'


export default class HomeScreen extends Component {
  render() {
    return (

        <View style={styles.viewhome}>  
        
            <Image style={styles.image} source={Logo} />
            
        <View >
                <TextInput
                    style={styles.textInput}
                    placeholder='E-mail'
                    keyboardType='email-address'
                />
    
                <TextInput
                    
                    style={styles.textInputPassword}
                    placeholder='Password'
                    
                />



    </View>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Logged')}>
                <View style={styles.login}>

                    <Text style={styles.logintext}>Login</Text>

                </View>
            </TouchableOpacity>
            
          
        </View>
       


    )
  }
}
const styles = StyleSheet.create({
    viewhome:{
        flex:1,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,

    },
    image:{
        width:260, 
        height:260,
    },
    logintext:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    login:{
        height:40,
        width:130,
        borderRadius:10,
        backgroundColor:'#E50914',
        marginTop:120,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center'
    },
    textInput:{
        textAlign:'center',
        marginTop:120,
        borderRadius:10,
        height:40,
        width:280,
        backgroundColor:'white',
        opacity:0.6,
    },
    textInputPassword:{
        textAlign:'center',
        marginTop:120,
        marginTop:10,
        borderRadius:10,
        height:40,
        width:280,
        backgroundColor:'white',
        opacity:0.6,
    },
    
})