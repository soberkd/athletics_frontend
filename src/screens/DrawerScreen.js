import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, } from 'react-native'
import React, {useContext,useEffect, useState}from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import { useNavigation } from '@react-navigation/native';

  import { Avatar, } from '@rneui/base/dist/Avatar';
  // import { Avatar } from "native-base";
  import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

export default function DrawerScreen(props) {
    const navigation =useNavigation();
       const {logout} = useContext(AuthContext);
    const [data, setData] = useState([])
    const {userToken} = useContext(AuthContext)
    const {userInfo} = useContext(AuthContext);
    const username = userInfo.user.username
  const loadData = () => {
    fetch(`http://192.168.23.171:8000/api/profiles/${username}/`,{
     method: 'GET',
     headers:{
      'Authorization': 'Token ' + userToken
     }
    })

    .then(resp => resp.json())
    .then(data => {
      //  console.log(data)
       setData(data)
       setLoading(false)
    })
    .catch(error => Alert.alert('Error', error.message))
  }

  useEffect(() =>{
    loadData();
   }, [])

   
  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView >
            <View>
            <ImageBackground source={require("../images/bgb.jpg")} resizeMode="cover" style={styles.image}>
      

            <Avatar rounded size="large" source={{}}  containerStyle={{backgroundColor: 'white', color:'#1DA1F2', marginTop: 20, marginLeft: 5 }}/>
                <Text style={{color: '#fff', padding: 5, fontSize: 18, }}>Hillary Kiplimo'</Text>
                <Text style={{color: '#fff', padding: 5, fontSize: 18, paddingBottom: 20 }}>@{data.username}</Text>
                {/* <Text style={{color: '#fff', fontSize: 14, padding: 5, }}>Followers: 1883</Text>
                <Text style={{color: '#fff', fontSize: 14, padding: 5, }}>Following: 19,382</Text> */}
    </ImageBackground>
            {/* <Avatar bg="cyan.500" source={{
      uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TE
      </Avatar> */}
                
                {/* <TouchableOpacity 
               onPress={ () => navigation.navigate('Edit')}>
      
      <Text style={{color:'fff', padding: 10,}}>Edit Profile</Text>
    </TouchableOpacity> */}
                
            
            </View>
            <View style={{backgroundColor: '#fff', marginTop:10, }}>
            <DrawerItemList  {...props}/>
            </View>
        </DrawerContentScrollView>
        <View>
            <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Go Premium</Text>
            </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical: 10}}>
                <View style={{flexDirection: 'row'}}>
                <Ionicons name= 'settings-outline' color={'#1e90ff'} size={16}/>
                    <Text style={{paddingLeft: 10, color:'#1e90ff'}}>Setting</Text>
                </View>
                 </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical: 10}}>
                <View style={{flexDirection: 'row'}}>
                <Ionicons name= 'share-social-outline' color={'#1e90ff'} size={16}/>
                    <Text style={{paddingLeft: 10, color:'#1e90ff'}}>Tell a Fun</Text>
                </View>
                 </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical: 10}} onPress={()=>{logout()}}>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name= 'log-out-outline' color={'#1DA1F2'} size={16}/>
                    <Text style={{paddingLeft: 10, color:'#1DA1F2'}}>Sign Out</Text>
                </View>
                 </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      image: {
        flex: 1,
        justifyContent: 'center',
        marginTop: -5
      },
})
