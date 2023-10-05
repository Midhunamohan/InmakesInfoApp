import React from "react";
import{View,StyleSheet,Image,Text, TextInput, TouchableHighlight}from 'react-native'
import { useNavigation } from '@react-navigation/native';




    const StudentDetails=()=>{

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
               <Text style={{fontSize:19,color:'#002333',alignSelf:'center',marginTop:40,fontWeight:'600'}}>Student details</Text>
               <View style={styles.view}>
                <TextInput style={styles.textinput} placeholder="Full name" placeholderTextColor={'#446270'}  />
                <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor={'#446270'} />
                <View  >
                <TextInput style={styles.textinput} placeholder="Select state" placeholderTextColor={'#446270'}/>
                <Image  style={styles.imageicon} source={require('./assets/path.png')}/>
                </View>
               
               
                <TextInput style={styles.textinput} placeholder="Pin code" placeholderTextColor={'#446270'}/>

                <TouchableHighlight style={styles.regbutton} onPress={()=>navigation.navigate('SchoolBoard')} underlayColor={'transparent'} >
                    <Text style={{fontSize:14,color:'#FFFFFF',alignSelf:'center'}}>Register</Text>
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
    
      
    },
    image:{
       width:210,
       height:85,
       marginLeft:75,
      marginTop:10,
      backgroundColor:'#13394A'
      
    },
    secondview:{
        backgroundColor:'#F9F9F9',     
        borderRadius:80,
         width:120,
         height:120,
         marginLeft:120,
         marginTop:40,
       
    },
    textview:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
    },
    view:{
        backgroundColor:'#002333',
        flex:1,
        marginTop:30,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    textinput:{
        borderWidth:1,
     marginTop:20,
     marginLeft:30,
     marginRight:30,
     borderRadius:3,
     borderColor:'#13394A',
    backgroundColor:'#062E40',
    fontSize:14,
    paddingLeft:20
    },
    imageicon:{
        // marginLeft:320,
       position:'absolute',
       marginTop:40,
      marginLeft:330
     
    },
    regbutton:{
        backgroundColor:'#00C458',
        marginLeft:30,
        marginRight:30,
        marginTop:22,
        height:50,
        borderRadius:3,
        justifyContent:'center'
    }
})
export default StudentDetails;
