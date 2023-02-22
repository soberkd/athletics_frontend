import { StyleSheet, ScrollView, Text,Image, View, TouchableOpacity,  Dimensions, } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../context/AuthContext';

import { Avatar, } from '@rneui/base/dist/Avatar';

const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_SIZE = SCREEN_WIDTH - 80;

export default function Profile() {
  const profile = {
    name: 'David Rudisha',
    username: 'IamRudisha',
    avatar: 'https://www.example.com/avatar.jpg',
    bio: '2x Olympic Champion || 800m- 1:40.91WR || President Of CAA Athletes’ Commission.',
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <Image
        source={{ uri: profile.avatar }}
        style={styles.avatar}
      />
      <Text style={styles.name}></Text>
      <Text style={styles.username}>{profile.username}</Text>
      <Text style={styles.bio}></Text>
      

      <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 20,
              marginHorizontal: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 26,
                color: 'white',
                fontFamily: 'bold',
              }}
            >
              {profile.name}
            </Text>
            <Text
              style={{
                flex: 0.5,
                fontSize: 15,
                color: 'gray',
                textAlign: 'left',
                marginTop: 5,
              }}
            >
              800M
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 26,
                color: 'green',
                fontFamily: 'bold',
                textAlign: 'right',
              }}
            >
              84%
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              width: SCREEN_WIDTH - 80,
              marginLeft: 40,
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 15,
                color: 'white',
                fontFamily: 'regular',
              }}
            >
              {profile.bio}
            </Text>
          </View>
          
          <View style={{ flex: 1, marginTop: 30 }}>
            <Text
              style={{
                flex: 1,
                fontSize: 15,
                color: 'rgba(216, 121, 112, 1)',
                fontFamily: 'regular',
                marginLeft: 40,
              }}
            >
              INTERESTS
            </Text>
</View>

<Text
              style={{
                flex: 1,
                fontSize: 15,
                color: 'rgba(216, 121, 112, 1)',
                fontFamily: 'regular',
                marginLeft: 40,
              }}
            >
              INFO
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 30,
              }}
            >
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.infoTypeLabel}>Age</Text>
                  <Text style={styles.infoTypeLabel}>Height</Text>
                  <Text style={styles.infoTypeLabel}>Country</Text>
                  <Text style={styles.infoTypeLabel}>Sign</Text>
                  <Text style={styles.infoTypeLabel}>Religion</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.infoAnswerLabel}>26</Text>
                  <Text style={styles.infoAnswerLabel}>5'4"</Text>
                  <Text style={styles.infoAnswerLabel}>Kenyan</Text>
                  <Text style={styles.infoAnswerLabel}>Pisces</Text>
                  <Text style={styles.infoAnswerLabel}>Catholic</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.infoTypeLabel}>Body Type</Text>
                  <Text style={styles.infoTypeLabel}>Diet</Text>
                  <Text style={styles.infoTypeLabel}>Smoke</Text>
                  <Text style={styles.infoTypeLabel}>Drink</Text>
                  <Text style={styles.infoTypeLabel}>Drugs</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 10, marginRight: -20 }}>
                  <Text style={styles.infoAnswerLabel}>Fit</Text>
                  <Text style={styles.infoAnswerLabel}>Vegan</Text>
                  <Text style={styles.infoAnswerLabel}>No</Text>
                  <Text style={styles.infoAnswerLabel}>No</Text>
                  <Text style={styles.infoAnswerLabel}>Never</Text>
                </View>
              </View>
            </View>
          
<TouchableOpacity  style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
    
    {/* <View style={{ flex: 1, marginTop: 30 }}> */}
            
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  username: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  nameHeader: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: 'right',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
})