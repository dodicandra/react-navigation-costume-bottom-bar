import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  ViewProps,
  TouchableOpacityProps,
} from 'react-native';

interface HeaderProps {
  styling?: StyleProp<ViewStyle>;
  title?: 'aku' | 'kamu';
}

const Header: React.FC<HeaderProps> = (props) => {
  const [data, setData] = useState<boolean>(false);

  const pressed = () => {
    setData(false);
  };

  return (
    <View {...props} style={props.styling}>
      <TouchableOpacity {...props} onPress={pressed}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
