import React, { Component } from 'react';

import { View,Image,StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/img/logonetflix1.png'
import bars from '../assets/img/bars.png'
import search from '../assets/img/search.png'

export default class Header extends Component {
    render() {
        return (
            
            <View style={styles.headerview}> 

            <View >                
                <TouchableOpacity onPress={()=>{ }}>
                    <Image source={bars} style={styles.bars} />
                </TouchableOpacity>
            </View>
            <View style={styles.headerview}>                

                <TouchableOpacity onPress={() => { }}>
                    <Image style={styles.header} source={logo} />
                </TouchableOpacity>
                </View>
                <View style={styles.headerview}>                
            
                <TouchableOpacity onPress={() => { }}>
                    <Image source={search} style={styles.search} />
                </TouchableOpacity>
                </View>

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width:180,
        height:70,
        alignSelf:'center',
        alignItems:'center',    
    },
    headerview:{
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:3,
        backgroundColor:'black'        
    },
    bars:{
        marginTop:6,
        height:26, 
        width:30,
        top:54,
        right:150,
        opacity:0.3,
        backgroundColor:'black'        
    },
    search:{
        height:30, 
        width:30,
        top:-54,
        left:150,
        opacity:0.6,
        backgroundColor:'black'        

        
    }
})
