import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useRef } from 'react';
import {
  FlatList,
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';

import { PopUp } from '../components/PopUp';
import { Color } from '../types';

interface DataFlat {
  id: number;
}
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];

const AnimatedFlatList: React.FC<FlatListProps<DataFlat>> = Animated.createAnimatedComponent(FlatList);

export default function Home() {
  const modal = useRef<PopUp>(null);
  const translateY = new Animated.Value(0);
  const scrollRef = useRef<FlatList>(null);
  const tabBarHeight = useBottomTabBarHeight();
  const onScroll = Animated.event<NativeSyntheticEvent<NativeScrollEvent>>(
    [{ nativeEvent: { contentOffset: { y: translateY } } }],
    { useNativeDriven: false }
  );

  const presed = () => {
    scrollRef.current?.scrollToEnd();
    alert('haloo');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
      >
        {[...data, ...data].map((value) => (
          <TouchableOpacity
            key={value.id + Math.random() * 3423}
            style={{
              backgroundColor: '#7bc8f0',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
              borderRadius: 14,
            }}
            onPress={() => modal.current?.onSow()}
          >
            <Text style={{ marginVertical: 200 }}>Open Modal</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <PopUp ref={modal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BackgroundLight1,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  safeArea: {
    height: 50,
    position: 'absolute',
    bottom: 0,
  },
  nav: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
