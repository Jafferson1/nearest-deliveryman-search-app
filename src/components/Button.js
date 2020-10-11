import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../config/theme';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      loading: false,
    };
  }

  render() {
    const {disabled, label, onPress} = this.props;
    const containerStyle = [
      styles.container,
      disabled ? styles.containerDisabled : styles.containerEnabled,
    ];
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        disabled={disabled}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.DEFAULT,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  containerEnabled: {
    opacity: 1,
  },
  containerDisabled: {
    opacity: 0.3,
  },
  text: {
    color: theme.WHITE,
    textAlign: 'center',
    height: 20,
  },
});

export default Button;
