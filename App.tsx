import { useForm } from 'my-useform';
import React, { useRef } from 'react';
import {
  FlatList,
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';

import { Buttons, Input } from 'components';
import { BottomNav } from 'components/BottomNav';

interface DataFlat {
  id: number;
}
const data: DataFlat[] = new Array(30).map((_, i) => ({ id: i }));

const AnimatedFlatList: React.FC<FlatListProps<
  DataFlat
>> = Animated.createAnimatedComponent(FlatList);

export default function App() {
  const { width } = useWindowDimensions();
  const translateY = new Animated.Value(0);
  const scrollRef = useRef<FlatList>(null);
  const lotie = useRef<TextInput>(null);

  // asdasd

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
      <View style={{ flex: 1 }}>
        <Input placeholder="type.." y={translateY} ref={lotie} />
        <AnimatedFlatList
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={onScroll}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 20 }}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => lotie.current!.clear()}
              style={{
                height: 130,
                backgroundColor: 'rgba(187, 187, 187, 1)',
                marginVertical: 5,
                marginHorizontal: 6,
                borderRadius: 7,
                elevation: 2,
              }}
            />
          )}
        />
        <SafeAreaView style={styles.safeArea}>
          <BottomNav />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
