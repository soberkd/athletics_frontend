import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../onboarding/OnboardingScreen';
import LoginScreen from '../onboarding/LoginScreen';
import RegisterScreen from '../onboarding/RegisterScreen';


export default function OnboardingStack() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="onboard1" component={OnboardingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}