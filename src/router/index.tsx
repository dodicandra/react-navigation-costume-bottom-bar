import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Home from 'screen/Home';
import MyTabBar from 'components/BottomNav';
import History from 'screen/History';
import Detail from 'screen/Detail';
import Profile from 'screen/Profile';
import Setting from 'screen/Setting';
import { View } from 'react-native';

interface Props {}

const { Screen, Navigator } = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Screen name="Home" component={Home} />
      <Screen name="History" component={History} />
      <Screen name="Detail" component={Detail} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Setting" component={Setting} />
    </Navigator>
  );
};
