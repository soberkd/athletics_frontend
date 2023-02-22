import { NavigationContainer } from '@react-navigation/native';
import React, {useContext, createContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import OnboardingStack from './OnboardingStack';
import MainDrawer from './MainDrawer';


export default function AppNav () {
    const {isLoading, userToken} = useContext(AuthContext);

    if (isLoading) {
       return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'}/>
        </View>
       );
    }

  return (
    <NavigationContainer>
       {userToken !== null ? <MainDrawer/> :<OnboardingStack/> }
    </NavigationContainer>
  )
}