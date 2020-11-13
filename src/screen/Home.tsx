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
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { PopUp } from 'components/PopUp';

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
    { useNativeDriven: true }
  );

  const presed = () => {
    scrollRef.current?.scrollToEnd();
    alert('haloo');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, paddingBottom: tabBarHeight + 20 }}>
        {[...data, ...data, ...data].map((value) => (
          <TouchableOpacity
            key={value.id}
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
    backgroundColor: '#fff',
    marginHorizontal: 10,
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
