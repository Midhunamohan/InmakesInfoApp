


import React from "react";
import { View, Text,StyleSheet,Image,ScrollView,TouchableHighlight} from "react-native"
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";


  function Video({navigation}){
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

          

            <View style={{backgroundColor:'#FFFFFF',position:'absolute',alignSelf:'center',elevation:1,marginTop:500}}>
            <Image  style={{width:300,height:130,}} source={require('./assets/teachers.jpg')}/>
            <TouchableHighlight onPress={() => navigation.navigate('VideoPage')} underlayColor={'transparent'} >
            <Text style={{fontSize:15,color:'#002333',marginLeft:2,padding:5,fontWeight:'900',marginTop:8}}>Long chapter name can be shown here.</Text>
            </TouchableHighlight>
           
            <View style={{flexDirection:'row',margin:10}}>

<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:20,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:6,height:6,alignSelf:'center',marginTop:1,borderRadius:10}} ></View>     
</View>
<Text style={{fontSize:12,color:'#9F9F9F',marginLeft:40}}>Chapters 1</Text>


<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:127,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:6,height:6,alignSelf:'center',marginTop:1,borderRadius:10}} ></View>     
</View>
<Text style={{fontSize:12,color:'#9F9F9F',marginLeft:45,}}>parts 2</Text>

</View>
           </View>



            <View style={{backgroundColor:'#FFFFFF',position:'absolute',alignSelf:'center',elevation:1,marginTop:280}}>
            <Image  style={{width:300,height:130,}} source={require('./assets/teachers.jpg')}/>
            <TouchableHighlight onPress={() => navigation.navigate('VideoPage')} underlayColor={'transparent'} >
            <Text style={{fontSize:15,color:'#002333',marginLeft:2,padding:5,fontWeight:'900',marginTop:8}}>Long chapter name can be shown here.</Text>
            </TouchableHighlight>
            <View style={{flexDirection:'row',margin:10}}>

<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:20,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:6,height:6,alignSelf:'center',marginTop:1,borderRadius:10}} ></View>     
</View>
<Text style={{fontSize:12,color:'#9F9F9F',marginLeft:40}}>Chapters 1</Text>


<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:127,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:6,height:6,alignSelf:'center',marginTop:1,borderRadius:10}} ></View>     
</View>
<Text style={{fontSize:12,color:'#9F9F9F',marginLeft:45,}}>part 1</Text>

</View>
           </View>


          



       

           

           


        </View>

    )
  }

  const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9'
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
  export default Video;

