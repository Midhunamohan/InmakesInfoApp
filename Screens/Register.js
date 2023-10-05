

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import{View,StyleSheet,Text,TextInput,TouchableHighlight,Image}from 'react-native'



const Register=()=>{
      
   const navigation = useNavigation();
   
     return(  
    

         <View style={styles.conatainer}>
       <Image style={styles.image} source={require('./assets/infolog.png')}/>
       
          <Text style={{fontSize:20,color:'#002333',fontWeight:'bold',marginTop:150}}>Enter your mobile number</Text>
          <Text style={{fontSize:14,color:'#9F9F9F'}}>We will send you an OTP to verify.</Text>
      <View style={styles.view2}>
      <Text style={{backgroundColor:'#062E40',width:45,height:58,marginTop:35,marginLeft:20,borderRadius:4,padding:8,borderRadius:4,borderColor:'#13394A',color:'#FFFFFF'}}>+91</Text>
         <TextInput style={{fontSize:18,backgroundColor:'#062E40',width:300,height:58,marginTop:35,marginLeft:12,paddingLeft:50,borderRadius:4,borderColor:'#13394A',borderWidth:1}} 
         placeholder="Mobilenumber" placeholderTextColor={'#446270'}></TextInput>
    
      </View>
      <View style={{flex:1, width:'100%', backgroundColor:'#002333',height:20}}>
        <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={()=>navigation.navigate('Otppage')}>
         <Text style={{fontSize:16,color:'white'}}>Continue</Text>
        </TouchableHighlight>
      </View>
         </View>
        
     )
 }
 
const styles= StyleSheet.create({
   conatainer:{
      flex:1,
      width:'100%',
      height:'100%',
      backgroundColor:'#FFFFFF',
      alignItems:'center',
      justifyContent:'center'
   },
   image:{
      width:'73%',
      height:60,
      marginTop:240,
      marginLeft:40,
   },
   view2:{
    flex:1,
    width:'100%',
    height:200,
   marginTop:30,
   backgroundColor:'#002333',
   borderTopEndRadius:20,
   borderTopStartRadius:20,
   flexDirection:'row'

   },
   button:{
    backgroundColor:'#00C458',
    marginLeft:40,
    marginRight:35,
    width:345,
    height:55,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
    marginTop:10,
    marginBottom:10

   }

})
export default Register;










