import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Animated, {
  diffClamp,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';

interface Props {
  translateY: Animated.Node<number>;
  onPress: () => void;
}

const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);

const FlatingButton = ({ translateY, onPress }: Props) => {
  const diff = diffClamp(translateY, 0, 100);

  const yy = interpolate(diff, {
    inputRange: [0, 100],
    outputRange: [200, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(diff, {
    inputRange: [0, 100],
    outputRange: [0, 1],
  });
  return (
    <AnimatedTouch
      style={[styles.container, { transform: [{ translateY: yy, scale }] }]}
      onPress={onPress}
    />
  );
};

export default FlatingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    position: 'absolute',
    borderRadius: 50 / 2,
    bottom: 80,
    right: 20,
  },
});
