


import React from "react";
import { View, Text,StyleSheet,Image,ScrollView,TouchableHighlight} from "react-native"


  function ChapterTest({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.secondview}>
        
         <Image style={{marginLeft:159,position:'absolute',marginBottom:54}} source={require('./assets/design.png')} />
       
              <View style={{flexDirection:'row'}}>
              <Image  style={{marginLeft:40,marginTop:45, }} source={require('./assets/arrowmenu.png')  }  />
              <Text style={{fontSize:24,color:'#FFFFFF',textAlign:'left',marginTop:45,marginLeft:40,fontWeight:'600'}}>Biology</Text>
              </View>
               
             <View>
               <View style={{position:'absolute',margin:20,height:120,width:400}}>
               <Text style={{fontSize:22,color:'#FFFFFF',marginLeft:2,marginTop:13,padding:15}}>Long chapter name can be shown here.</Text>
                
                <View style={{flexDirection:'row'}}>

                    <View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'green',borderRadius:10,marginLeft:20,width:11,height:11}}>
                        <View style={{backgroundColor:'green',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
                    </View>
                    <Text style={{fontSize:12,color:'#00C458',marginLeft:40}}>1 Chapters</Text>
                    

                    <View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'green',borderRadius:10,marginLeft:127,width:11,height:11}}>
                        <View style={{backgroundColor:'green',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
                    </View>
                    <Text style={{fontSize:12,color:'#00C458',marginLeft:45,}}>3 parts</Text>

                </View>
               </View>
             </View>
           
            </View>


            <Text style={{fontSize:15,color:'black',alignContent:'center',marginTop:470,marginLeft:160}}>NO DATA</Text>

           

           


        </View>

    )
  }

  const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    secondview:{
        flex:1,
        backgroundColor:'#00202F',
        width:500,
        bottom:460,
        height:290,
        position:'absolute'
    }
  })
  export default ChapterTest;

