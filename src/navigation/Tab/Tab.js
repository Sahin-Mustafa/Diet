import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
/*
home=>home-variant ,home-outline
food=>food , food-outline
profile=>account ,account-outline
analysis=>poll
setting=>account-cog
exit=>exit-to-app
*/

import Home from '../../screen/Home';
import Menu from '../../screen/Menu/Menu';

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: 'HomeScreen',
    label: 'Home',
    activeIcon: 'home-variant',
    inActiveIcon: 'home-outline',
    component: Home,
    size: 20,
  },
  {
    route: 'Menu',
    label: 'Menu',
    activeIcon: 'food',
    inActiveIcon: 'food-outline',
    component: Menu,
    size: 20,
  },
  // {
  //   route: 'Profile',
  //   label: 'Profile',
  //   activeIcon: 'account',
  //   inActiveIcon: 'account-outline',
  //   component: Profile,
  //   size: 20,
  // },
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        name={focused ? item.activeIcon : item.inActiveIcon}
        size={item.size}
      />
    </TouchableOpacity>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 30,
          position: 'absolute',
          bottom: 2,
          right: 10,
          left: 10,
          borderRadius: 8,
          backgroundColor: '#ffcd07',
        },
      }}
      initialRouteName="HomeScreen">
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              //tabBarlabel: item.label,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
