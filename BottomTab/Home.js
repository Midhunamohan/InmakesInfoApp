import React,{Component} from "react";

import{ View, StyleSheet ,Image, Text, TouchableHighlight, ScrollView,TouchableOpacity,Button}from 'react-native'



      function Home ({navigation}){
           
        return(
           

            <ScrollView style={styles.container}>
                 <View style={{flex:1,backgroundColor:'transparent'}}>
                <View style={{flexDirection:'row',}}>

                    <TouchableHighlight onPress={() => navigation.openDrawer()} underlayColor={'transparent'} >
                    <Image style={{width:35,height:35,marginTop:18,marginLeft:25}} source={require('./assets/menu.png')}  />
                    </TouchableHighlight>

                <Image style={styles.image} source={require('./assets/infolog.png')}/>

                    <View style={styles.classview}>
                        <View style={{backgroundColor:'#007345',width:16,height:16,borderRadius:30,marginTop:5,marginLeft:5}}></View>
                        <Text style={{fontSize:10,marginTop:5,color:'#00C458',marginLeft:8}}>Classes</Text>
                    </View>
                </View>
                <Text style={{fontSize:12,fontWeight:'500',color:'#002333',marginTop:40,marginLeft:32}}>Goodmorning</Text>
                <Text style={{fontSize:24,color:'#002333',fontWeight:'bold',marginLeft:32}}>Aaron Taylor</Text>

                <View style={{marginTop:10,position:'absolute',marginTop:140}}>
                    
                 <Image style={{width:330,height:64,marginLeft:32,marginRight:32,marginTop:20, flexGrow:1}}source={require('./assets/banner.png')}/>
                 <View style={{backgroundColor:'transparent',position:'absolute',marginLeft:45,marginTop:27}}>
                 <Text style={{color:'#BAC3C7',fontSize:12,marginLeft:9,marginTop:3}}>Class</Text>
                    <Text style={{fontWeight:14,color:'#FFFFFF',marginLeft:9}}>Plus two science</Text>
                 </View>
                 <Image  style={styles.imageicon} source={require('./assets/pathm.png')}/>
                 
                 </View>

                 <View style={{flexDirection:'row',marginLeft:28}}>
                 <TouchableHighlight onPress={() => navigation.navigate('Courses')} underlayColor='transparent'>
                        <View style={styles.subject}>
                        <View style={{backgroundColor:'#00C458',width:23,height:23,borderRadius:30,marginTop:6,marginLeft:5}}></View>
                        <Text style={{fontSize:12,marginLeft:5,marginTop:8,color:'#002333'}}>Biology</Text>
                    </View>
                    </TouchableHighlight>
               
                    <View style={styles.subject}>
                        <View style={{backgroundColor:'#00C458',width:23,height:23,borderRadius:30,marginTop:6,marginLeft:5}}></View>
                        <Text style={{fontSize:12,marginLeft:5,marginTop:8,color:'#002333'}}>Physics</Text>
                    </View>
                    <View style={styles.subject}>
                        <View style={{backgroundColor:'#00C458',width:23,height:23,borderRadius:30,marginTop:6,marginLeft:5}}></View>
                        <Text 
                        style={{fontSize:12,marginLeft:5,marginTop:8,color:'#002333'}}>Physics</Text>
                    </View>
                   
                    <View style={styles.subject}>
                        <View style={{backgroundColor:'#00C458',width:23,height:23,borderRadius:30,marginTop:6,marginLeft:5}}></View>
                        <Text style={{fontSize:12,marginLeft:5,marginTop:8,color:'#002333'}}>Biology</Text>
                    </View>
                    
                 </View>

                 <Text style={{marginTop:24,fontSize:12,color:'#002333',marginLeft:32,marginBottom:8}}>Recent courses</Text>

                 <View style={{flexDirection:'row'}}>
                    <Image style={{width:213,height:110,marginLeft:32}} source={require('./assets/biology.jpg')}/>
                  
                    <Image style={{width:213,height:110,marginLeft:8}} source={require('./assets/nuro.jpg')}/>
                    <View style={{position:'absolute',backgroundColor:'transparent',marginTop:86,marginLeft:40}}>
                        <Image style={{}} source={require('./assets/video.png')}/>    
                    </View>

                    <View style={{position:'absolute',backgroundColor:'transparent',marginTop:86,marginLeft:263}}>
                    <Image style={{}} source={require('./assets/video.png')}/>
                    </View>
                 </View>

                 <View style={{flexDirection:'row'}}>

                 <View style={{width:238,height:367,backgroundColor:'#002333',marginTop:24,marginLeft:32}}>
                    <View style={{width:79,height:79,backgroundColor:'#002E43',borderRadius:40,marginTop:38,marginLeft:32}}></View>
                    <Text style={{fontSize:18,color:'#FFFFFF',marginTop:16,marginLeft:24}}>Target live classes</Text>
                    <Text style={{color:'#446270',fontSize:14,marginLeft:24}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                    <TouchableHighlight style={styles.button}>
                        <Text style={{color:'#FFFFFF',fontSize:12,alignSelf:'center',marginTop:10}}>Book a free Class</Text>
                    </TouchableHighlight>

                 </View>

                 <View style={{width:238,height:367,backgroundColor:'#002333',marginTop:24,marginLeft:16}}>

                 <View style={{width:79,height:79,backgroundColor:'#002E43',borderRadius:40,marginTop:38,marginLeft:32}}></View>
                    <Text style={{fontSize:18,color:'#FFFFFF',marginTop:16,marginLeft:24}}>Avail free online counselling session</Text>
                    <Text style={{color:'#446270',fontSize:14,marginLeft:24}}>By LearningHub's career experts</Text>
                    <TouchableHighlight style={styles.button}>
                        <Text style={{color:'#FFFFFF',fontSize:12,alignSelf:'center',marginTop:10}}>Schedule a call</Text>
                    </TouchableHighlight>
                 </View>

                 </View>  


                


                 </View>        
            </ScrollView>
       

           
        )
    }
  

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#FFFFFF',
         
    },
    image:{
        width:125,
        height:28,
        marginTop:20,
        marginLeft:90,
     },
     smallview:{
        width:6,
        height:6,
        backgroundColor:'#00C458',
       marginRight:3,
       marginTop:3,
     },
     classview:{
        width:75,
        height:32,
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        borderColor:'#00C458',
        flexDirection:'row',
        marginTop:20,
        marginLeft:40
     },
     imageicon:{
        // marginLeft:320,
       position:'absolute',
       marginTop:45,
      marginLeft:330,
     color:'#FFFFFF',
     
    },
    subject:{
        width:92,
        height:39,
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        borderColor:'#002333',
        flexDirection:'row',
        marginTop:96,
        borderRadius:5,
        marginLeft:15
    },
    button:{
        // flex:1,
        height:37,
        backgroundColor:'#00C458',
        marginTop:16,
        marginLeft:24,
        marginRight:61,
        borderRadius:4
    },
    tabbar:{
        flex:1,
        backgroundColor:'grey',
        marginTop:300

    }
})
export default Home;




