import * as Icons from '@expo/vector-icons';
import React from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

interface Props {}

const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);

const Bottons = (props: Props) => {
  const x = new Animated.Value(0);
  const btn = new Animated.Value(0);

  const anima = () => {
    Animated.sequence([
      //@ts-ignore
      Animated.timing(btn, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
      //@ts-ignore
      Animated.timing(btn, {
        toValue: btn._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
      //@ts-ignore
      Animated.timing(x, {
        toValue: x._value == 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const rotate = btn.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const btnCam = x.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  const btnStar = x.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -30],
  });

  const btnStartLeft = x.interpolate({
    inputRange: [0, 1],
    outputRange: [11, -20],
  });

  const btnCard = x.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -20],
  });
  const btnCardLeft = x.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -30],
  });

  return (
    <SafeAreaView
      pointerEvents="auto"
      style={{ position: 'absolute', top: -30, zIndex: 1000 }}
    >
      <AnimatedTouch
        onPress={() => alert('haloo')}
        style={[styles.icons, { top: btnCam, left: 15 }]}
      >
        <Icons.AntDesign color="white" name="camerao" size={20} />
      </AnimatedTouch>
      <AnimatedTouch
        onPress={() => alert('haloo')}
        style={[styles.icons, { top: btnStartLeft, left: btnStar }]}
      >
        <Icons.AntDesign color="white" name="staro" size={20} />
      </AnimatedTouch>
      <AnimatedTouch
        onPress={() => alert('haloo')}
        style={[styles.icons, { top: btnCard, right: btnCardLeft }]}
      >
        <Icons.AntDesign color="white" name="creditcard" size={20} />
      </AnimatedTouch>
      <TouchableHighlight
        underlayColor="#03FBD1"
        onPress={anima}
        style={styles.container}
      >
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Icons.AntDesign name="plus" size={40} color="white" />
        </Animated.View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default Bottons;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: '#03FBD1',
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    backgroundColor: '#EA00FF',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
