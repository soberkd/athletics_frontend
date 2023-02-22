import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerScreen from '../screens/DrawerScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import AthleteJournal from '../screens/AthleteJournal';
import NotificationScreen from '../screens/NotificationScreen';
import DmScreen from '../screens/DmScreen';

export default function DrawerStack() {
    const Stack = createNativeStackNavigator();
    return (
    <Stack.Navigator>
        <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Direct Message" component={DmScreen } options={{ headerShown: false }}/>

      </Stack.Navigator>
  )
}