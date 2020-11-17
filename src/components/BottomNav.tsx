import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';

type TabBarProps = BottomTabBarProps<BottomTabBarOptions>;

const { width, height } = Dimensions.get('window');
const v = height / 100;
const h = width / 100;

const d = `
M 0 ${height} 
V 0
H ${width * 0.36} 
Q ${width * 0.42} 0 ${width * 0.43} ${v * 2} 
A 50 120 0 0 0 ${width * 0.57} ${v * 2}
Q ${width * 0.59} 0 ${width * 0.62} 0
H ${width}
V ${height}
H 0 Z
`;

export default function MyTabBar({ state, descriptors, navigation, style, tabStyle }: TabBarProps) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View removeClippedSubviews style={[tabStyle, style]}>
      <Svg fill="none" width={width} style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} height={60}>
        <Path fill="#f1f1f1" d={d} />
      </Svg>
      <View
        style={{
          height: 60,
          marginTop: 60 / 2,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const isDetail = route.name === 'Detail';

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={{ selected: isFocused ? true : false }}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
                backgroundColor: isDetail ? '#f1f1f1' : 'transparent',
                width: isDetail ? 50 : undefined,
                height: isDetail ? 50 : undefined,
                borderRadius: isDetail ? 50 / 2 : undefined,
                top: isDetail ? -30 : undefined,
              }}
            >
              {isDetail ? (
                <AntDesign name="scan1" size={30} color={isFocused ? '#121849' : '#b4b4b4'} />
              ) : route.name === 'History' ? (
                <FontAwesome5 name="history" size={30} color={isFocused ? '#121849' : '#b4b4b4'} />
              ) : route.name === 'Profile' ? (
                <Feather name="user" size={30} color={isFocused ? '#121849' : '#b4b4b4'} />
              ) : (
                <AntDesign name={route.name.toLowerCase()} size={30} color={isFocused ? '#121849' : '#b4b4b4'} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
