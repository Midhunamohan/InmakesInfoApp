import React from 'react'
import { View,StyleSheet,Text } from 'react-native'


const Contact=()=>{
  
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to contact page</Text>
            </View>
        )
    }

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    text:{
        fontSize:25,
        color:'black'

    }
})
export default Contact;