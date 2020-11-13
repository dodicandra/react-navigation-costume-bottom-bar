import LottieView from 'lottie-react-native';
import React, { useRef, forwardRef, RefObject } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  tes: string;
}

const Lottie: React.FC<Props> = ({ tes }) => {
  const lotieRef = useRef<LottieView>(null);

  return (
    <TouchableOpacity
      onPress={() => lotieRef.current?.play()}
      style={[StyleSheet.absoluteFill, styles.lottie]}
    >
      <LottieView
        ref={lotieRef}
        source={require('../assets/animation/Lottie2.json')}
        autoPlay
        loop
      />
    </TouchableOpacity>
  );
};

const LottieMemo = React.memo(Lottie);

export default LottieMemo;

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
    zIndex: 100,
    marginLeft: 80,
    alignSelf: 'center',
  },
});
