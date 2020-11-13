import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View } from 'react-native';

import { IReact } from 'typed';

interface Props extends StackScreenProps<{ Home: undefined; LOL: undefined }, 'Home'> {
  text: string;
}

interface StaticComponent<TProps = {}> extends React.FC<TProps> {
  sharedElements?(navigation: ReturnType<typeof useNavigation>): void;
}

type Obj = { id: string; num: IReact };

type Tes = Pick<Obj, 'id'>;

const Detail: StaticComponent<Props> = ({ text, navigation }) => {
  navigation.navigate('Home');
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Detail;
