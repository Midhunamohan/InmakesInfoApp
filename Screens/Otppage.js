
import React from 'react';
import{View,Text,StyleSheet,TextInput,TouchableHighlight,Image}from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Otppage=()=>{
    const navigation = useNavigation();
     
        return(

            <View style={styles.conatainer}>
               
                <Image style={styles.image} source={require('./assets/infolog.png')}/> 
               <View style={styles.secondview}>
            
                  <View style={styles.textview}>
                  <Text style={{fontSize:12,color:'#000000',marginTop:55,marginLeft:52,fontWeight:'bold'}}>ICON</Text>
                 </View>
                <Image source={require('./assets/Groupic.png')}>
                     </Image> 
                </View>
                <Text style={{fontSize:21,color:'#002333',alignSelf:'center',fontWeight:'700',marginTop:30}}>Verification code</Text>
                <Text style={{fontSize:15,alignSelf:'center',color:'#9F9F9F'}}>please type the verification code send to</Text>
                  <Text style={{fontSize:14,alignSelf:'center',color:'#002333',paddingTop:50,fontWeight:'500'}}>+91 9876543210</Text>
                <View style={styles.inputview}>
                <TextInput  style={styles.textinput} />
                <TextInput   style={styles.textinput}/>
                <TextInput   style={styles.textinput}/>
                <TextInput  style={styles.textinput} />
                <TextInput  style={styles.textinput} />
                <TextInput  style={styles.textinput} />                      
                </View>
                
                <View style={{flex:1,backgroundColor:'#002333'}}>
                 <TouchableHighlight style={styles.button} onPress={()=> navigation.navigate('StudentDetails')}  underlayColor={'transparent'} >
                     <Text style={{fontSize:14,color:'#FFFFFF',marginTop:10}}>Resend OTP</Text>
                 </TouchableHighlight>
                   <View style={{flex:1,backgroundColor:'#002333',}}>
                 <Text style={{color:'#446270',alignSelf:'center',fontSize:10,marginTop:10}}>Resend after 28s</Text>
                       <View style={styles.lastview}>
                        <Image style={{marginLeft:100,marginTop:13}} source={require('./assets/union.png')}/> 
                           <Text style={{fontSize:14,color:'#00C458',marginLeft:5,marginTop:7}}>Contact Us</Text>

                       </View>
                       </View>

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
            
              
            },
            image:{
               width:200,
               height:80,
               marginLeft:75,
               marginTop:10
              
            },
            secondview:{
                backgroundColor:'#F9F9F9',
                borderRadius:80,
                 width:130,
                 height:130,
                 marginLeft:120,
                 marginTop:80,
                //  justifyContent:'center',
                //  alignItems:'center'  
            },
            textview:{
                position:'absolute',
                justifyContent:'center',
                alignItems:'center'
             
            },
            inputview:{
              backgroundColor:'#002333',
              flex:1,
              flexDirection:'row',  
              borderTopEndRadius:20,
              borderTopStartRadius:20,
              width:'100%',
              marginTop:50,
              
            
             
            },
            textinput:{
                fontSize:5,
                borderColor:'#13394A',
                borderWidth:1,
                height:50,
                width:55,
                marginTop:32,
                backgroundColor:'#062E40',
                marginLeft:8,
                borderRadius:4,
                
            },
            button:{
                backgroundColor:'#00C458',
                 marginLeft:32,
               marginRight:32,
               height:55,
               borderRadius:4,
              justifyContent:'center',
              alignItems:'center'
              
            },
            lastview:{
                backgroundColor:'#002333',
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#002333',
                marginRight:100,
                
            }
            
          
        })
    export default Otppage;