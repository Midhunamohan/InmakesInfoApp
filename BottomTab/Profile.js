import React from 'react'
import { View,StyleSheet,Text, Image ,ScrollView,TouchableHighlight} from 'react-native'



const Profile=()=>{
  
        return(
            <View style={styles.container}>
                
    

                <View style={styles.darkview}>
                    <View style={{position:'absolute',marginRight:200}}>
                    <Image style={{width:270,marginTop:10,marginRight:20}} source={require('./assets/design.png')}/>
                    </View>
                    <Text style={{color:'#FFFFFF',fontSize:20,marginLeft:150,marginTop:40}}>Profile</Text>
                    <Image style={{marginLeft:80,marginTop:45}} source={require('./assets/notification.png')}/>
                    <Image style={{marginLeft:30,width:30,height:30,marginTop:40}} source={require('./assets/menu.png')}/>
                   

                </View>
                
                <ScrollView style={{flex:2,backgroundColor:'#FFFFFF', borderWidth:1,
                marginTop:100,margin:20, borderRadius:3,borderColor:'#EEEEEE'}}>

                 <View style={{flexDirection:'row'}}>

                 <Image style={{width:50,height:45,marginLeft:15,marginTop:10}} source={require('./assets/avatar.png')} />

                 <View>
                 <Text style={{marginTop:16,fontSize:15,color:'#4D4D4D',marginLeft:10}}>Jane Doe</Text>
                 <Text style={{marginTop:1,fontSize:10,color:'#4D4D4D',marginLeft:10}}>ID: 12345678</Text>
                 </View>  
                 </View>
                 <View>
                 <Text style={{marginTop:5,color:'#4D4D4D',padding:20,borderBottomWidth:1,borderBottomColor:'#EEEEEE'}}>Personal Info</Text>
                 </View>
                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#EEEEEE',flex:1,padding:12}}>
                    <Text style={{fontSize:12, color:'#4D4D4D',alignSelf:'flex-start',marginLeft:10}}>Account Settings</Text>
                    <Text style={{color:'#4D4D4D',fontSize:12,fontWeight:'bold',marginLeft:20}}>Aaron Taylor</Text>

                 </View>

                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#EEEEEE',flex:1,padding:12}}>
                    <Text style={{fontSize:12, color:'#4D4D4D',alignSelf:'flex-start',marginLeft:10}}>Email</Text>
                    <Text style={{color:'#4D4D4D',fontSize:12,fontWeight:'bold',marginLeft:80}}>emaidid123@server.com</Text>

                 </View>
                 
                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#EEEEEE',flex:1,padding:12}}>
                    <Text style={{fontSize:12, color:'#4D4D4D',alignSelf:'flex-start',marginLeft:10}}>Number</Text>
                    <Text style={{color:'#4D4D4D',fontSize:12,fontWeight:'bold',marginLeft:70}}>+91 9876543210</Text>
                 </View>

                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#EEEEEE',flex:1,padding:20}}>
                    <Text style={{fontSize:14, color:'#4D4D4D',alignSelf:'flex-start',marginLeft:10,fontWeight:'bold'}}>Course Info</Text>
                 </View>

                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#EEEEEE',flex:1,padding:12}}>
                    <Text style={{fontSize:12, color:'#4D4D4D',alignSelf:'flex-start',marginLeft:10}}>Center</Text>
                    <Text style={{color:'#4D4D4D',fontSize:12,fontWeight:'bold',marginLeft:90}}>Inmakes edu</Text>
                 </View>

                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#EEEEEE',flex:1,padding:12}}>
                    <Text style={{fontSize:12, color:'#4D4D4D',alignSelf:'flex-start',marginLeft:10}}>Course</Text>
                    <Text style={{color:'#4D4D4D',fontSize:12,fontWeight:'bold',marginLeft:90}}>Plus Two Science</Text>
                 </View>

                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#EEEEEE',flex:1,padding:15}}>
                    <Text style={{fontSize:12, color:'#4D4D4D',alignSelf:'flex-start',marginLeft:10}}>Payment Status</Text>
                    <Text style={{color:'#4D4D4D',fontSize:12,fontWeight:'bold',marginLeft:50}}>Free</Text>
                 </View>

                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#EEEEEE',flex:1,padding:15}}>
                    <Text style={{fontSize:12, color:'#4D4D4D',alignSelf:'flex-start',marginLeft:10}}>Expiry Date</Text>
                    <Text style={{color:'#4D4D4D',fontSize:12,fontWeight:'bold',marginLeft:70}}>Not Applicable</Text>
                 </View>
                 <TouchableHighlight style={{width:300,height:60,backgroundColor:'#00C458',alignSelf:'center',borderRadius:5}}>
                    <Text style={{fontSize:12,color:'#FFFFFF',alignSelf:'center',marginTop:16}}>Custom Payment</Text>
                 </TouchableHighlight>
                 <Image style={{position:'absolute',marginTop:500,marginLeft:50}} source={require('./assets/payment.png')}/>
                 <View >
                 
                 </View>

                 
                

               
                  </ScrollView>
               
            </View>
        )
    }

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    text:{
        fontSize:25,
        color:'black'

    },
    darkview:{
        flex:1,
        backgroundColor:'#00202F',
        width:395,
        height:230,
   
      flexDirection:'row',
      position:'absolute'

    }
})
export default Profile;


