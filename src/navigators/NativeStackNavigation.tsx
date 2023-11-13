import React from 'react'
import DetailsScreen from '../screens/DetailsScreen'
import PaymentsScreen from '../screens/PaymentsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from '../navigators/TabNavigator'

const stack = createNativeStackNavigator();

const NativeStackNavigation = () => {
  return <NavigationContainer>
  <stack.Navigator screenOptions={{ headerShown: false }}>
  <stack.Screen
      name='Tab'
      component={TabNavigator}
      options={{ animation: 'slide_from_bottom' }}
    />
    <stack.Screen
      name='Details'
      component={DetailsScreen}
      options={{ animation: 'slide_from_bottom' }}
    />
    <stack.Screen
    name='Payment'
    component={PaymentsScreen}
    options={{ animation: 'slide_from_bottom' }}
  />
  </stack.Navigator>
</NavigationContainer>
}

export default NativeStackNavigation

