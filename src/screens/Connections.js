import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Avatar, } from '@rneui/base/dist/Avatar';

const connections = [
  {
    id: '1',
    name: 'Eluid Kipchoge',
    title: 'Marathon runner',
    country: 'Kenya',
    // avatar: require(''),
  },
  {
    id: '2',
    name: 'David Rudish',
    title: '800m Runner',
    country: 'Kenya',
    // avatar: require(''),
  },
  {
    id: '3',
    name: 'Usain Bolt',
    title: '100m runner',
    country: 'Jamaica',
    // avatar: require(''),
  },
  {
    id: '4',
    name: 'Hire a Mzungu',
    title: 'Athlete agent',
    country: 'Canada',
    // avatar: require(''),
  },
  {
    id: '5',
    name: 'Crescent Wyne',
    title: 'Athlete agent',
    country: 'USA',
    // avatar: require(''),
  },
];

const Connections = () => {
  return (
    <FlatList
      data={connections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.connectionContainer}>
          {/* <Image source={item.avatar} style={styles.avatar} /> */}
          <Avatar rounded size="medium" source={{}}  containerStyle={{backgroundColor: 'white', color:'#1DA1F2', padding: 10 }}/>
          <View style={styles.connectionDetails}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.title}>{item.title} from {item.country}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  connectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: '90%'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  connectionDetails: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
  title: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Connections;
