import * as React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {TextInput} from 'react-native-paper';
import theme from '../config/theme';

class FormTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      isFocused: false,
    };
  }
  textInputRef = React.createRef();

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };

  handleFocus = () => {
    this.setState({isFocused: true});
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  handleBlur = () => {
    this.setState({isFocused: false});
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  render() {
    const {error, onFocus, onBlur, style, ...otherProps} = this.props;
    const {isFocused} = this.state;
    return (
      <View style={[styles.container, style]}>
        <TextInput
          style={styles.textInput}
          selectionColor={theme.DODGER_BLUE}
          underlineColor={
            isFocused ? theme.DODGER_BLUE : theme.LIGHT_GRAY
          }
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          mode="outlined"
          ref={this.textInputRef}
          autoCapitalize="none"
          autoCorrect={false}
          theme={{colors: {primary: theme.DODGER_BLUE, underlineColor: 'transparent'}}}
          {...otherProps}
        />
        <Text style={styles.errorText}>{error || ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    ...Platform.select({
      ios: {
        borderColor: theme.SILVER,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      android: {
        paddingLeft: 6,
      },
    }),
  },
  errorText: {
    height: 20,
    color: theme.TORCH_RED,
    ...Platform.select({
      android: {
        paddingLeft: 6,
      },
    }),
  },
});

export default FormTextInput;
