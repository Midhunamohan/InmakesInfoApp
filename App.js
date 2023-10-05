
// import * as React from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Register from './Screens/Register'
import Otppage from './Screens/Otppage'
import StudentDetails from './Screens/Studentdetails';
import SchoolBoard from './Screens/Schoolboard';
import AppTour from './Screens/Apptour';
import Home from './BottomTab/Home';
import Contact from './BottomTab/Contact';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator,} from '@react-navigation/drawer';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { Image, View, Text,TouchableHighlight } from 'react-native';
import Recent from './BottomTab/Recent';
import Profile from './BottomTab/Profile';
import Exams from './BottomTab/Exams';

import Courses from './Screens/Courses';
import VideoPage from './Screens/VideoPage';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function MyStack(){
  return(

    <Stack.Navigator>
    <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
     <Stack.Screen name="Otppage" component={Otppage} options={{headerShown:false}} />
     <Stack.Screen name="StudentDetails" component={StudentDetails} options={{headerShown:false}} />
     <Stack.Screen name="SchoolBoard" component={SchoolBoard} options={{headerShown:false}} />
     <Stack.Screen name="AppTour" component={AppTour} options={{headerShown:false}} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} options={{headerShown:false}}/>
        <Stack.Screen name='Courses' component={Courses} options={{headerShown:false}}/>
        <Stack.Screen name='MyToptab' component={MyToptab} options={{headerShown:false,}}/>
        <Stack.Screen name='VideoPage' component={VideoPage} options={{headerShown:false}}/>
        
     
 </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName='Home'

    screenOptions={{
      headerShown:false,
      tabBarLabelStyle:{fontSize:10,},
      tabBarItemStyle:{width:'80%'},
      tabBarStyle:{backgroundColor:'#FFFFFF',bottom:25,left:20,right:20,elevation:0,position:'absolute',height:70,borderRadius:10,borderColor:'#EEEEEE'}
    }}  
    >
    
    <Tab.Screen name='Home' component={Home}
      options={{
        tabBarActiveTintColor:'#00C458',
        tabBarInactiveTintColor:'#C2C2C2',
       tabBarShowLabel:false,
        tabBarIcon: () => (
         <View style={{position:'absolute',flexDirection:'row'}}>
          <Image source={require('./BottomTab/assets/home.png')}
          resizeMode='contain'
          />
          <Text style={{fontSize:10,marginLeft:5}}>Home</Text>

         </View>
        ),
      }}
     />



    <Tab.Screen name='Recent' component={Recent}
      options={{
        tabBarActiveTintColor:'#00C458',
        tabBarInactiveTintColor:'#C2C2C2',
       tabBarShowLabel:false,
        tabBarIcon: () => (
         <View style={{position:'absolute',flexDirection:'row'}}>
          <Image source={require('./BottomTab/assets/recent.png')}
          resizeMode='contain'
          />
          <Text style={{fontSize:10,marginLeft:5}}>Recent</Text>

         </View>
        ),
      }}
     />

   <Tab.Screen name='Exams' component={Exams}
      options={{
        tabBarActiveTintColor:'#00C458',
        tabBarInactiveTintColor:'#C2C2C2',
       tabBarShowLabel:false,
        tabBarIcon: () => (
         <View style={{position:'absolute',flexDirection:'row'}}>
          <Image source={require('./BottomTab/assets/exams.png')}
          resizeMode='contain'
          />
          <Text style={{fontSize:10,marginLeft:5}}>Exams</Text>

         </View>
        ),
      }}
     />

     <Tab.Screen name='Profile' component={Profile}
      options={{
        tabBarActiveTintColor:'#00C458',
        tabBarInactiveTintColor:'#C2C2C2',
       tabBarShowLabel:false,
        tabBarIcon: () => (
         <View style={{position:'absolute',flexDirection:'row'}}>
          <Image source={require('./BottomTab/assets/profile.png')}
          resizeMode='contain'
          />
          <Text style={{fontSize:10,marginLeft:5}}>Profile</Text>

         </View>
        ),
      }}
     />


    <Tab.Screen name='Contact' component={Contact}
      options={{
        tabBarActiveTintColor:'#00C458',
        tabBarInactiveTintColor:'#C2C2C2',
       tabBarShowLabel:false,
        tabBarIcon: () => (
         <View style={{position:'absolute',flexDirection:'row'}}>
          <Image source={require('./BottomTab/assets/contact.png')}
          resizeMode='contain'
          />
          <Text style={{fontSize:10,marginLeft:5}}>Contact</Text>

         </View>
        ),
      }}
     />
     
  
    </Tab.Navigator>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#002333'}}>
      {/* Custom Header */}

      <View style={{ backgroundColor: '#002333',padding: 16,height:230}}>
        <Image source={require('./assets/design.png')}  style={{position:'absolute',marginRight:100,width:400,marginTop:25}}/>
        {/* <Text style={{color: 'white', fontSize: 24,}}>Custom Drawer</Text> */}
        <View style={{flexDirection:'row',marginLeft:40,marginTop:85}}>
        <Image style={{width:70,height:70,borderRadius:33,}} source={require('./assets/avatar.png')}/>
        <View style={{marginLeft:15}}>
        <Text style={{fontSize:15,color:'#FFFFFF',fontWeight:'700'}} >Aaron Taylor</Text>
        <Text style={{fontSize:12,color:'#6A828E'}}>ID: 1234</Text>
        </View>
        
        </View>

      
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />
      {/* Custom Item */}
       
      <DrawerItem
      style={{borderBottomWidth:0.5,borderBottomColor:'grey',padding:10}}
        label="Exam corner"
        onPress={() => alert('exam corner Clicked')}
        icon={({ focused, color, size }) => (
          <View style={{marginRight: 12,}}>
           <View style={{width:35,height:35,borderWidth:1,borderColor:'#00C458',borderRadius:6}}></View>
          </View>
        )}
        labelStyle={{color:'#FFFFFF',fontSize:15,}}
      />
        <DrawerItem
      style={{borderBottomWidth:0.5,borderBottomColor:'grey',padding:10}}
        label="Subrscriptions"
        onPress={() => alert('Subrscriptions Clicked')}
        icon={({ focused, color, size }) => (
          <View style={{marginRight: 12,}}>
           <View style={{width:35,height:35,borderWidth:1,borderColor:'#00C458',borderRadius:6}}></View>
          </View>
        )}
        labelStyle={{color:'#FFFFFF',fontSize:15,}}
      />
       <DrawerItem
      style={{borderBottomWidth:0.5,borderBottomColor:'grey',padding:10}}
        label="Analytics"
        onPress={() => alert('Analytics Clicked')}
        icon={({ focused, color, size }) => (
          <View style={{marginRight: 12,}}>
           <View style={{width:35,height:35,borderWidth:1,borderColor:'#00C458',borderRadius:6}}></View>
          </View>
        )}
        labelStyle={{color:'#FFFFFF',fontSize:15,}}
      />

      <DrawerItem
      style={{borderBottomWidth:0.5,borderBottomColor:'grey',padding:10}}
        label="Downloads"
        onPress={() => alert('Downloads Clicked')}
        icon={({ focused, color, size }) => (
          <View style={{marginRight: 12,}}>
           <View style={{width:35,height:35,borderWidth:1,borderColor:'#00C458',borderRadius:6}}></View>
          </View>
        )}
        labelStyle={{color:'#FFFFFF',fontSize:15,}}
      />

<DrawerItem
      style={{borderBottomWidth:0.5,borderBottomColor:'grey',padding:10}}
        label="Notifications"
        onPress={() => alert('Notifications Clicked')}
        icon={({ focused, color, size }) => (
          <View style={{marginRight: 12,}}>
           <View style={{width:35,height:35,borderWidth:1,borderColor:'#00C458',borderRadius:6}}></View>
          </View>
        )}
        labelStyle={{color:'#FFFFFF',fontSize:15,}}
      />
       <DrawerItem
      style={{borderBottomWidth:0.5,borderBottomColor:'grey',padding:10}}
        label="Referrals"
        onPress={() => alert('Referrals Clicked')}
        icon={({ focused, color, size }) => (
          <View style={{marginRight: 12,}}>
           <View style={{width:35,height:35,borderWidth:1,borderColor:'#00C458',borderRadius:6}}></View>
          </View>
        )}
        labelStyle={{color:'#FFFFFF',fontSize:15,}}
      />
       <DrawerItem
      style={{borderBottomWidth:0.5,borderBottomColor:'grey',padding:10}}
        label="Share app"
        onPress={() => alert('Share app Clicked')}
        icon={({ focused, color, size }) => (
          <View style={{marginRight: 12,}}>
           <View style={{width:35,height:35,borderWidth:1,borderColor:'#00C458',borderRadius:6}}></View>
          </View>
        )}
        labelStyle={{color:'#FFFFFF',fontSize:15,}}
      />
       <DrawerItem
      style={{borderBottomWidth:0.5,borderBottomColor:'grey',padding:10}}
        label="Logout"
        onPress={() => alert('Logout Clicked')}
        icon={({ focused, color, size }) => (
          <View style={{marginRight: 12,}}>
           <View style={{width:35,height:35,borderWidth:1,borderColor:'#E14949',borderRadius:6}}></View>
          </View>
        )}
        labelStyle={{color:'#E14949',fontSize:15,}}
      />
       <DrawerItem
      style={{padding:10}}
        label=""
        onPress={() => alert('Enquire Clicked')}
        icon={({ focused, color, size }) => (
          <View style={{marginRight: 12,}}>
           <View style={{width:200,height:55,borderWidth:1,borderColor:'#00C458',borderRadius:6}}></View>
           <Text style={{fontSize:15,color:'#00C458',position:'absolute',alignSelf:'center',marginTop:16}}>Enquire now</Text>
          </View>
        )}
        labelStyle={{color:'#FFFFFF',fontSize:15,}}
      />
    
    </DrawerContentScrollView>
  );
}

   function MyDrawer(){
    return(
    <Drawer.Navigator
    initialRouteName='Exam corner'

    drawerContent={props => <CustomDrawerContent {...props} /> }
     >
    <Drawer.Screen name="MyTabs" component={MyTabs}  options={{headerShown:false,drawerItemStyle: { display: 'none'}}} />
  </Drawer.Navigator>
    );
   }

   import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Video from './Toptab/Video';
import ChapterTest from './Toptab/ChapterTest';
import Resources from './Toptab/Resources';
import QnBank from './Toptab/QnBank';
   const Toptab = createMaterialTopTabNavigator();


function MyToptab(){
  return(
    <Toptab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarLabelStyle:{fontSize:13,
      backgroundColor:'#00202F'
      },
      tabBarItemStyle:{width:'100%'},
      tabBarStyle:{top:215,backgroundColor:'#00202F',position:'absolute',width:'100%',height:45}
      
    }} 
    initialRouteName='Video'

    >
    <Toptab.Screen name="Video" component={Video} 
   options={{
     tabBarActiveTintColor:'#FFFFFF',
     tabBarInactiveTintColor:'#83A1AF',
     tabBarShowLabel:true,
     backgroundColor:'#00202F'
  }}
    />
    <Toptab.Screen name="ChapterTest" component={ChapterTest}
      options={{
        tabBarActiveTintColor:'#FFFFFF',
        tabBarInactiveTintColor:'#83A1AF',
        tabBarShowLabel:true,
        backgroundColor:'#00202F'
     }}
    />
    <Toptab.Screen name="Resources" component={Resources} 
      options={{
        tabBarActiveTintColor:'#FFFFFF',
        tabBarInactiveTintColor:'#83A1AF',
        tabBarShowLabel:true,
        backgroundColor:'#00202F'
     }}
    />
    <Toptab.Screen name="QnBank" component={QnBank} 
      options={{
        tabBarActiveTintColor:'#FFFFFF',
        tabBarInactiveTintColor:'#83A1AF',
        tabBarShowLabel:true,
        backgroundColor:'#00202F'
     }}
    />
  </Toptab.Navigator>
  )
}
     

    const App=()=>{
  return ( 
    <NavigationContainer>
       <MyStack/>
   </NavigationContainer>
  )
}
export default App;


  

