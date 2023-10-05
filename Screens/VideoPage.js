import React from "react";

import { View,Text,StyleSheet,Image } from "react-native";
import { TextInput } from "react-native-paper";


function VideoPage(){
    return(
        <View style={styles.container}>
            <View style={styles.image}>
            <Image  style={{width:230,height:230,alignSelf:'center'}} source={require('./assets/women.png')}/>
            </View>
            <View style={{flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:'grey',}}>
                <Text style={{fontSize:16,borderRightWidth:1,borderColor:'grey',padding:10,color:'#FFFFFF',textAlign:'left'}}>Long Chapter Name can be here shown here</Text>
                <View>
                <Image  style={{alignSelf:'center',marginLeft:15}} source={require('./assets/download.png')}/>
                <Text style={{fontSize:8,color:'#FFFFFF',marginLeft:5}}>Download</Text>
            </View>
                </View>

                <View style={{flexDirection:'row',padding:10}}>
                    <Image style={{width:15,height:15,alignSelf:'flex-start'}} source={require('./assets/leftarrow.png')}/>
                    <Text style={{fontSize:9,color:'#FFFFFF',marginLeft:10}}>Previous</Text>

                <View style={{position:'absolute',borderWidth:1,marginTop:10,borderColor:'green',borderRadius:10,marginLeft:180,width:11,height:11}}>
                        <View style={{backgroundColor:'green',width:5,height:5,alignSelf:'center',marginTop:2,}} ></View>     
                    </View>
                    <Text style={{fontSize:10,color:'#00C458',alignSelf:'center',marginLeft:130}}>Part 1</Text>

                    <Text style={{fontSize:9,color:'#FFFFFF',marginLeft:100}}>Next</Text>
                    <Image style={{width:15,height:15,marginLeft:10}} source={require('./assets/rightarrow.png')}/>

                </View>

                <View style={{width:320,height:65,borderRadius:5,backgroundColor:'#000000',marginTop:180,marginLeft:45,padding:15,flexDirection:'row'}}>
                    <Text style={{color:'#FFFFFF',fontSize:12}}>Your sample question can be shown here no matter how long</Text>
                    <Image style={{width:25,height:25,borderRadius:12,position:'absolute',marginLeft:250,marginTop:30}} source={require('./assets/avatar.png')}/>

                </View>

                <View style={{backgroundColor:'#062E40',width:320,height:50,marginTop:12,marginLeft:45,flexDirection:'row',borderRadius:5}}>
                <Text style={{textAlign:'center',color:'#446270',marginLeft:5,marginTop:10}}>Ask a question?</Text>

                     <View style={{backgroundColor:'#FFFFFF',width:40,height:20,marginTop:12,marginLeft:255,position:'absolute'}}>
                        <Text style={{fontSize:10,color:'#00202F',textAlign:'right',alignSelf:'center'}}>Post</Text>
                     </View>        
                  </View>

                  <View style={{borderColor:'#00C458',width:320,height:55,borderWidth:1,marginTop:12,marginLeft:44,borderRadius:5,flexDirection:'row'}}>
                    <Image style={{width:24,height:24,marginTop:12,marginLeft:75}} source={require('./assets/whatsapp.png')}/>
                    <Text style={{fontSize:13,color:'#00C458',textAlign:'center',marginTop:15,marginLeft:15}}>Chat with teacher</Text>
                        </View>
                    
          
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#00202F',
    },
    image:{
        width:400,
        height:230,
        backgroundColor:'white',
       
    }
})
export default VideoPage;
