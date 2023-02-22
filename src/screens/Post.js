import { StyleSheet, Text, TextInput, Button, Image, View, TouchableOpacity, Alert, } from 'react-native'
import React, { useState, useContext  } from 'react'
import { launchCamera, launchImageLibrary, MediaType } from 'react-native-image-picker';


import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

const MAX_TWEET_LENGTH = 280;

const Post = (props) => {

    const [content, setContent] = useState('');
    const [tweet, setTweet] = useState('');
    const [postLength, setTweetLength] = useState(MAX_TWEET_LENGTH);
    const [imageUp, setImageUp] = useState(null);
    const {userToken, userInfo} = useContext(AuthContext);

  const handleImageCapture = () => {
    launchCamera({ mediaType: MediaType.photo }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        setImageUp(response.uri);
      }
    });
  };

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: MediaType.photo }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        setImageUp(response.uri);
      }
    });
  };

    // launchCamera(options?, callback);

    // // You can also use as a promise without 'callback':
    // const result = await launchCamera(options?);

      // const selectFile = async () => {
      //   // No permissions request is necessary for launching the image library
      //   let result = await ImagePicker.launchImageLibraryAsync({
      //     mediaTypes: ImagePicker.MediaTypeOptions.All,
      //     allowsEditing: false,
      //     aspect: [4, 3],
      //     quality: 1,
      //   });
      //   console.log(result);
      
      //   if (!result.cancelled) { npm install --save-dev react-native-config
      //     setImageUp(result.uri);
      //   }
      // };
     
  const handlePost = () => {
    const data = new FormData();
    data.append('content', content);
    if (imageUp !== null)
    {
    data.append('image', {
      uri: imageUp,
        name: 'my-image.png',
        type: 'image/png', 
    });}
    Alert.alert("          Sent!", "Your post was sent successfully!")
    props.navigation.navigate('Main')
    fetch('http://192.168.23.171:8000/api/Europa/create/', {
      method: 'POST',
      headers: {
        'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        // 'Content-Type':'application/x-www-form-urlencoder',
        'Authorization': 'Token ' + userToken
      },
        // body: createFormData(content, {userId: userInfo.user.id})
        body: data,
    })
    .then(resp => resp.json())
    .then(data => { 
      console.log(data + "foj")
     
      // props.navigation.navigate('Football Home')
    })
    .catch(error=> Alert.alert('Error', error.message))
    console.log(content);
  };

  const handlePostChange = (text) => {
    setTweet(text);
    setTweetLength(MAX_TWEET_LENGTH - text.length);
  };
  return (
    <View style={styles.container}>
       <View style={styles.textLengthContainer}>
        <Text style={styles.textLength}>{postLength}</Text>
        <Button title="Post" onPress={handlePost} />
        {imageUp && <Image source={{ uri:imageUp }} style={{ width: 200, height: 200 }} />}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Write your post here..."
        placeholderTextColor={'black'}
        value={content}
        // onChangeText={setContent}
        onChangeText={content => setContent(content)}
        // onChangeText={handlePostChange}
        multiline={true}
        maxLength={MAX_TWEET_LENGTH}
      />
      <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={handleImageCapture}>
        <Ionicons name= 'camera-outline'  color={"black"} size={24}/> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImagePicker()}>
        <Ionicons name= 'image-outline'  color={"black"} size={24}/>
      </TouchableOpacity>
      <Ionicons name= 'person-add-outline'  color={"black"} size={24}/> 
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
      },
      input: {
        width: '90%',
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        color: "#000",
        marginBottom: 10,
      },
      textLength: {
        marginTop: 10,
        marginBottom: 10,
        color: "#000"
      },
      textLengthContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
      },
      iconsContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '90%',
        // paddingLeft: 20

      },
})