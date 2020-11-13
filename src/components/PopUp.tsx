import React from 'react';
import { StyleSheet, Modal, TouchableWithoutFeedback, Dimensions, View } from 'react-native';

const dimension = Dimensions.get('window');

interface Props {
  onClick?(): void;
}

interface State {
  shown: boolean;
}

export class PopUp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      shown: false,
    };
  }

  public onSow = () => {
    this.setState({
      shown: true,
    });
  };

  private close = () => {
    this.setState({
      shown: false,
    });
  };

  render() {
    const props = this.props;
    const state = this.state;
    return (
      <Modal
        statusBarTranslucent
        animated
        transparent
        animationType="slide"
        hardwareAccelerated
        visible={state.shown}
        onDismiss={this.close}
        onRequestClose={this.close}
      >
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.close}>
            <View style={styles.modal} />
          </TouchableWithoutFeedback>
          <View style={styles.card} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modal: {
    height: dimension.height,
    width: dimension.width,
  },
  card: {
    height: dimension.height * 0.4,
    width: dimension.width,
    backgroundColor: 'white',
    borderTopEndRadius: 17,
    borderTopStartRadius: 17,
  },
});
