import React from "react";
import{ View,Image,Text,StyleSheet,TextInput,TouchableHighlight }from 'react-native'
import { useNavigation } from '@react-navigation/native';


            const SchoolBoard=()=>{
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
             <Text style={styles.textschool}>Select you school board</Text>

             <View style={styles.lastview}>
             <View  >
                <TextInput style={styles.textinput} placeholder="Select board" placeholderTextColor={'#446270'}/>
                <Image  style={styles.imageicon} source={require('./assets/path.png')}/>
                </View>
                <View  >
                <TextInput style={styles.textinput} placeholder="Select class" placeholderTextColor={'#446270'}/>
                <Image  style={styles.imageicon} source={require('./assets/path.png')}/>
                </View>
                <TouchableHighlight style={styles.regbutton} underlayColor={'transparent'} onPress={()=>navigation.navigate('AppTour') }>
                    <Text style={{fontSize:14,color:'#FFFFFF',alignSelf:'center'}}>Continue</Text>
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
       backgroundColor:'#FFFFFF'
    },
    image:{
        width:230,
       height:85,
       marginLeft:75,
      marginTop:10,
      backgroundColor:'#13394A'
       
     },
    secondview:{
        backgroundColor:'#F9F9F9',
        borderRadius:80,
         width:130,
         height:130,
        alignSelf:'center',
         marginTop:120
    },
    textview:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
    },
    textschool:{
        fontSize:20,
        color:'#002333',
        alignSelf:'center',
        fontWeight:'600',
        marginTop:80
    },
    lastview:{
        backgroundColor:'#002333',
        flex:1,
        marginTop:10,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    imageicon:{
        // marginLeft:320,
       position:'absolute',
       marginTop:40,
      marginLeft:330, 
    },
    
    textinput:{
        borderWidth:1,
     marginTop:25,
     marginLeft:30,
     marginRight:30,
     borderRadius:3,
     borderColor:'#13394A',
    backgroundColor:'#062E40',
    fontSize:14,
    paddingLeft:20
    },
    regbutton:{
        backgroundColor:'#00C458',
        marginLeft:30,
        marginRight:30,
        marginTop:40,
        height:50,
        borderRadius:3,
        justifyContent:'center'
    }
})
export default SchoolBoard;
