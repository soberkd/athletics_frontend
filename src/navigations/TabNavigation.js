import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import Notifications from '../screens/NotificationScreen';
import Connections from '../screens/Connections';
import Events from '../screens/Events';
import Post from '../screens/Post';
import DrawerStack from './DrawerStack';

export default function TabNavigation() {

const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="Main"
                    component={HomeScreen} 
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name= 'home-outline'  color={color} size={24}/>
                        ), }} 
                    />
        
        <Tab.Screen name="Connections" 
                    component={Connections} 
                    options={{
                        // headerShown: false,
                        tabBarLabel: 'Connections',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name= 'people-outline'  color={color} size={24}/> 
                        ), }} />
        <Tab.Screen name="Post" 
                    component={Post} 
                    options={{
                        // headerShown: false,
                        tabBarLabel: 'Post',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name= 'send-outline'  color={color} size={24}/>
                        ), }} />
        <Tab.Screen name="Notifications" 
                    component={DrawerStack}
                    options={{
                        // headerShown: false,
                        tabBarLabel: 'Notifications',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name= 'notifications-outline'  color={color} size={24}/>),
                        }}/>
        <Tab.Screen name="Events" 
                    component={Events} 
                    options={{
                        // headerShown: false,
                        tabBarLabel: 'Events',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name= 'trophy-outline'  color={color} size={24}/>
                        ), }} />
    </Tab.Navigator>
  )
}


