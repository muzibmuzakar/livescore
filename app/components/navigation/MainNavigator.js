import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import DetailMatch from '../../screens/DetailMatch';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='root' component={TabNavigator} options={{headerShown: false}} />
            <Stack.Screen name='detail-match' component={DetailMatch} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;

const styles = StyleSheet.create({});