import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { PopUp } from '../components/PopUp';

interface Props {}

const History = (props: Props) => {
  const refPop = useRef<PopUp>(null);

  return (
    <View style={{ flex: 1 }}>
      <PopUp ref={refPop} />
    </View>
  );
};

export default History;
