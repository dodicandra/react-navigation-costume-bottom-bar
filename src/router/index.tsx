import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import MyTabBar from '../components/BottomNav';
import Detail from '../screen/Detail';
import History from '../screen/History';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Love from '../screen/Setting';

const { Screen, Navigator } = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Navigator
      tabBarOptions={{
        tabStyle: {
          height: 90,
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
        },
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Screen name="Home" component={Home} />
      <Screen name="History" component={History} />
      <Screen name="Detail" component={Detail} />
      <Screen name="Love" component={Love} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
