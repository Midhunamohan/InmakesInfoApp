import React from "react";
import{ Image, StyleSheet, Text, TouchableHighlight, View }from 'react-native'



               function AppTour ({navigation}) {
               
               
            return(
                <View style={styles.container}>
                    <Image style={styles.image} source={require('./assets/hello.png')}/>
                    <Text style={{fontSize:20, alignSelf:'center',color:'#002333',marginTop:20,fontWeight:'700'}}>App tour title</Text>
                      <Text style={{fontSize:14,alignSelf:'center',color:'#9F9F9F'}}>The app tour description goes here.</Text>
                     <View style={{flex:1,backgroundColor:'white'}}>
                      <View style={styles.borderview} >

                      <View style={styles.imageview} >

                        <TouchableHighlight onPress={()=> navigation.navigate('MyDrawer')} underlayColor={'transparent'} >

                        <Image style={{marginTop:15,alignSelf:'center'}} 
                        source={require('./assets/arrow.png')}  
                         />
                        </TouchableHighlight>
                    
                     </View>
                     </View>  
                     </View>          
                    
                </View>
            )
        }

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#FFFFFF'
    },
    image:{
        width:351,
        height:500,
        margin:10

    },
    imageview:{
        // flex:1,
       width:50,
       height:55,
       alignSelf:'center',
        margin:5,
       backgroundColor:'#00C458', 
       borderRadius:5,
       borderWidth:1,
       borderColor:'#00C4583D'  
    },
    borderview:{
      
        width:60,
        height:65,
        alignSelf:'center',
        marginTop:30,
        marginBottom:40,
        borderWidth:1,
        borderColor:'#E5E5E5',
        backgroundColor:'#FFFFFF',
        borderRadius:8,
       

    }
})
export default AppTour;