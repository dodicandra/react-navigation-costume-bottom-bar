import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type TabBarProps = BottomTabBarProps<BottomTabBarOptions>;

const { width, height } = Dimensions.get('window');
const v = height / 100;
const h = width / 100;

const d = `
M 0 ${height} 
V 0
H ${width * 0.36} 
Q ${width * 0.41} 0 ${width * 0.43} ${v * 2} 
A 50 120 0 0 0 ${width * 0.57} ${v * 2}
Q ${width * 0.59} 0 ${width * 0.62} 0
H ${width}
V ${height}
H 0 Z
`;

export default function MyTabBar({ state, descriptors, navigation, style }: TabBarProps) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={style} removeClippedSubviews>
      <Svg
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        removeClippedSubviews
        fill="none"
        width={width}
        height={75}
      >
        <Path fill="grey" d={d} />
      </Svg>
      <View
        style={{
          width,
          height: 75,
          marginTop: 60 / 2,
          flexDirection: 'row',
          backgroundColor: 'transparent',
          justifyContent: 'space-evenly',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
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
                position: isDetail ? 'absolute' : 'relative',
                backgroundColor: isDetail ? 'red' : 'transparent',
                width: isDetail ? 50 : undefined,
                height: isDetail ? 50 : undefined,
                borderRadius: isDetail ? 50 / 2 : undefined,
                top: isDetail ? -20 : undefined,
              }}
            >
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

/*

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

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}

*/
