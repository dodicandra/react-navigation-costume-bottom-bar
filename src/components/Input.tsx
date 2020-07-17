import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TextInputProps,
} from 'react-native';
import Animated, {
  diffClamp,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

interface Props extends TextInputProps {
  y: Animated.Node<number>;
  placeholder: string;
}

type Ref =
  | string
  | ((instance: TextInput | null) => void)
  | React.RefObject<TextInput>
  | null
  | undefined
  | any;

const Input: React.RefForwardingComponent<Ref, Props> = (
  { placeholder, ...props },
  ref
) => {
  const diff = diffClamp(props.y, 0, 100);

  const translateY = interpolate(diff, {
    inputRange: [0, 100],
    outputRange: [-100, 50],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View style={[styles.conteiner, { transform: [{ translateY }] }]}>
      <TextInput
        style={{ flex: 1, fontSize: 20 }}
        ref={ref}
        {...props}
        placeholder={placeholder}
      />
    </Animated.View>
  );
};

const forward = React.forwardRef(Input);

export default forward;

const styles = StyleSheet.create({
  conteiner: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
    paddingHorizontal: 8,
    zIndex: 100,
  },
});
