
import React from "react";
import { View, Text,StyleSheet,Image,ScrollView,TouchableHighlight} from "react-native"


  function Courses({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.secondview}>
        
         <Image style={{marginLeft:159,position:'absolute',marginBottom:40,}} source={require('./assets/design.png')}/>
       
               <TouchableHighlight>
               <Image  style={{marginLeft:40,marginTop:75, }} source={require('./assets/arrowmenu.png')}/>
               </TouchableHighlight>
               

             <View>
                <Text style={{fontSize:24,color:'#FFFFFF',textAlign:'left',marginTop:35,marginLeft:20,fontWeight:'600'}}>Biology</Text>
                <View style={{flexDirection:'row'}}>

                    <View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'green',borderRadius:10,marginLeft:20,width:11,height:11}}>
                        <View style={{backgroundColor:'green',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
                    </View>
                    <Text style={{fontSize:12,color:'#00C458',marginLeft:40}}>12 Chapters</Text>
                    

                    <View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'green',borderRadius:10,marginLeft:127,width:11,height:11}}>
                        <View style={{backgroundColor:'green',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
                    </View>
                    <Text style={{fontSize:12,color:'#00C458',marginLeft:40}}>124 hours</Text>

                </View>
             </View>
           
            </View>

            <ScrollView style={{width:390,position:'absolute',flex:1,backgroundColor:'transparent',alignSelf:'center',padding:10,marginTop:150,paddingLeft:20}}>
               
               <View style={{backgroundColor:'#FFFFFF',elevation:3,height:90,width:280,alignSelf:'center',borderRadius:5,borderColor:'#EEEEEE',borderWidth:1}}>
                <TouchableHighlight  onPress={() => navigation.navigate('MyToptab')} underlayColor={'transparent'}>
                <Text style={{fontSize:18,color:'#002333',padding:10,fontWeight:500}}>Long chapter name can be shown here.</Text>
                </TouchableHighlight>
                
                <View style={{flexDirection:'row',marginBottom:20}}>

<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:20,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:40}}>Chapter 1</Text>


<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:127,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:60}}>3 parts</Text>

</View>

               </View>



               <View style={{backgroundColor:'#FFFFFF',elevation:3,height:90,width:280,marginTop:20,alignSelf:'center',borderRadius:5,borderColor:'#EEEEEE',borderWidth:1}}>
               <TouchableHighlight onPress={() => navigation.navigate('Chapter')} underlayColor={'transparent'}>
                <Text style={{fontSize:18,color:'#002333',padding:10,fontWeight:500}}>Long chapter name can be shown here.</Text>
                </TouchableHighlight>
                <View style={{flexDirection:'row',marginBottom:20}}>

<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:20,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:40}}>Chapter 1</Text>


<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:127,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:60}}>3 parts</Text>

</View>

               </View>


               <View style={{backgroundColor:'#FFFFFF',elevation:3,marginTop:20,height:90,width:280,alignSelf:'center',borderRadius:5,borderColor:'#EEEEEE',borderWidth:1}}>
                <Text style={{fontSize:18,color:'#002333',padding:10,fontWeight:500}}>Long chapter name can be shown here.</Text>
                <View style={{flexDirection:'row',marginBottom:20}}>

<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:20,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:40}}>Chapter 1</Text>


<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:127,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:60}}>3 parts</Text>

</View>

               </View>




               <View style={{backgroundColor:'#FFFFFF',elevation:3,marginTop:20,height:90,width:280,alignSelf:'center',borderRadius:5,borderColor:'#EEEEEE',borderWidth:1}}>
                <Text style={{fontSize:18,color:'#002333',padding:10,fontWeight:500}}>Long chapter name can be shown here.</Text>
                <View style={{flexDirection:'row',marginBottom:20}}>

<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:20,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:40}}>Chapter 1</Text>


<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:127,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:60}}>3 parts</Text>

</View>

               </View>



               <View style={{backgroundColor:'#FFFFFF',elevation:3,marginTop:20,height:90,width:280,alignSelf:'center',borderRadius:5,borderColor:'#EEEEEE',borderWidth:1}}>
                <Text style={{fontSize:18,color:'#002333',padding:10,fontWeight:500}}>Long chapter name can be shown here.</Text>
                <View style={{flexDirection:'row',marginBottom:20}}>

<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:20,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:40}}>Chapter 1</Text>


<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:127,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:60}}>3 parts</Text>

</View>

               </View>



               <View style={{backgroundColor:'#FFFFFF',elevation:3,marginTop:20,height:90,width:280,alignSelf:'center',borderRadius:5,borderColor:'#EEEEEE',borderWidth:1}}>
                <Text style={{fontSize:18,color:'#002333',padding:10,fontWeight:500}}>Long chapter name can be shown here.</Text>
                <View style={{flexDirection:'row',marginBottom:20}}>

<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:20,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:40}}>Chapter 1</Text>


<View style={{position:'absolute',borderWidth:1,marginTop:3,borderColor:'#9F9F9F',borderRadius:10,marginLeft:127,width:11,height:11}}>
    <View style={{backgroundColor:'#9F9F9F',width:5,height:5,alignSelf:'center',marginTop:2}} ></View>     
</View>
<Text style={{fontSize:10,color:'#9F9F9F',marginLeft:60}}>3 parts</Text>

</View>

               </View>


               

            </ScrollView>

           


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
        width:400,
        bottom:520,
        height:265,
        position:'absolute'
    }
  })
  export default Courses;

