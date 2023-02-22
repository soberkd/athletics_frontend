import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import DrawerScreen from '../screens/DrawerScreen';
import Profile from '../screens/Profile';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import AthleteJournal from '../screens/AthleteJournal';
import OnboardingScreen from '../onboarding/OnboardingScreen';

export default function MainDrawer() {

    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={props => <DrawerScreen {...props}/>}>
      <Drawer.Screen name="Top" component={TabNavigation} options={{ headerShown: false }}/>
      <Drawer.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/>
      <Drawer.Screen name="Subscribe" component={SubscriptionScreen}/>
      <Drawer.Screen name="Journal" component={AthleteJournal}  />
      <Drawer.Screen name="on" component={OnboardingScreen}  options={{ headerShown: false }} />

    </Drawer.Navigator>
  )
}