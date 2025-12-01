import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useSelector } from 'react-redux';
import AuthNavigation from './AuthNavigation';
import PagesNavigation from './PagesNavigation';
import PagesNavigationAcente from './PagesNavigationAcente';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
  const isAuth = useSelector((state: any) => state.Auth.isAuth);
  const isAuthAcente = useSelector((state: any) => state.Auth.isAuthAcente);

  const [fontsLoaded] = useFonts({
    'Nunito': require('../assets/Fonts/Nunito.ttf'),
    'Montserrat': require('../assets/Fonts/Montserrat.ttf'),
    'ZenDots': require('../assets/Fonts/ZenDots.ttf'),
    'Urbanist': require('../assets/Fonts/Urbanist.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuth && !isAuthAcente && (
          <Stack.Screen name="Auth" component={AuthNavigation} />
        )}

        {/* Müşteri */}
        {isAuth && !isAuthAcente && (
          <Stack.Screen name="Pages" component={PagesNavigation} />
        )}

        {/* Acente */}
        {!isAuth && isAuthAcente && (
          <Stack.Screen name="PagesNavigationAcente" component={PagesNavigationAcente} />
        )}
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default RootNavigation;