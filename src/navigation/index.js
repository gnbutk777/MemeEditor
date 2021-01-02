import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {routes, SelectImage, EditMeme, Share} from '../screens';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName={routes.selectImage.name}>
      <Stack.Screen name={routes.selectImage.name} component={SelectImage} />
      <Stack.Screen name={routes.editMeme.name} component={EditMeme} />
      <Stack.Screen name={routes.share.name} component={Share} />
    </Stack.Navigator>
  );
};

const NavContaier = () => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);

export default NavContaier;
