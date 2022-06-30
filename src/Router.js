import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as PaperProvider} from 'react-native-paper';

import TabNavigation from './navigation/Tab/Tab';

import Profile from './screen/Profile/Profile';
import Analysis from './screen/Analysis';
import WeeklyMenu from './screen/WeeklyMenu';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: 'white',
              width: 240,
            },
            drawerPosition: 'left',
            drawerType: 'slide',
          }}>
          <Drawer.Screen name="Home" component={TabNavigation} />
          <Drawer.Screen name="Profil" component={Profile} />
          {/* <Drawer.Screen name="Analysis" component={Analysis} /> */}
          <Drawer.Screen name="Weekly Menu" component={WeeklyMenu} />
          {/* add dark mode */}
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Router;
