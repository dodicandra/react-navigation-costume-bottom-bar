import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
//@ts-ignore
import { Surface, Shape, Path } from '@react-native-community/art';

interface Props {}

export const BottomNav = (props: Props) => {
  const { width, height } = useWindowDimensions();
  return (
    <Surface width={width} height={78}>
      <Shape
        d={new Path()
          .moveTo(0, 0)
          .lineTo(0, width)
          .lineTo(width, width)
          .lineTo(width, 0)
          .move(-width / 2 + 60, 0)
          .arc(-120, 0, 80, 120)
          .close()}
        fill="#fff"
      />
    </Surface>
  );
};

const styles = StyleSheet.create({});
