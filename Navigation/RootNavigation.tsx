import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useSelector } from 'react-redux';
import AuthNavigation from './AuthNavigation';
import PagesNavigation from './PagesNavigation';

SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
  const isAuth = useSelector((state: any) => state.Auth.isAuth);

  const [fontsLoaded] = useFonts({
    'Nunito': require('../assets/Fonts/Nunito.ttf'),
    'Montserrat': require('../assets/Fonts/Montserrat.ttf'),
    'ZenDots': require('../assets/Fonts/ZenDots.ttf'),
    'Urbanist': require('../assets/Fonts/Urbanist.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      {isAuth ? <PagesNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;