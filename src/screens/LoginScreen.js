import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import FormTextInput from '../components/FormTextInput';
import imageLogo from '../assets/images/logo-black.png';
import theme from '../config/theme';
import constants from '../config/constants';
import Spinner from 'react-native-loading-spinner-overlay';
import {store, setIsAuthenticated} from '../../store';
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      emailTouched: false,
      passwordTouched: false,
    };
  }

  passwordInputRef = React.createRef();

  handleEmailChange = (email) => {
    this.setState({email: email});
  };

  handlePasswordChange = (password) => {
    this.setState({password: password});
  };

  handleEmailBlur = () => {
    this.setState({emailTouched: true});
  };

  handlePasswordBlur = () => {
    this.setState({passwordTouched: true});
  };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };

  handleLoginPress = async () => {
    this.setState({isLoading: true});
    const {email, password} = this.state;
    let token = email + password; //fake token
    try {
      await AsyncStorage.setItem('token', JSON.stringify(token));
      store.dispatch(setIsAuthenticated(true));
      this.setState({
        email: '',
        password: '',
        emailTouched: false,
        passwordTouched: false,
        isLoading: false,
      });
      ToastAndroid.showWithGravity(
        'Sucess',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      this.props.navigation.navigate('Nav');
    } catch (err) {
      ToastAndroid.showWithGravity(
        'Unregistered token',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };

  render() {
    const {
      email,
      password,
      isLoading,
      emailTouched,
      passwordTouched,
    } = this.state;
    const emailError = !email && emailTouched ? 'Required' : undefined;
    const passwordError =
      !password && passwordTouched ? 'Required' : undefined;
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={constants.IS_IOS ? 'padding' : undefined}>
          <Spinner
            visible={isLoading}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          <Image source={imageLogo} style={styles.logo} />
          <View style={styles.form}>
            <FormTextInput
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              onSubmitEditing={this.handleEmailSubmitPress}
              label={'E-mail'}
              placeholder={'E-mail'}
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              onBlur={this.handleEmailBlur}
              error={emailError}
              blurOnSubmit={constants.IS_IOS}
            />
            <FormTextInput
              secureTextEntry={true}
              returnKeyType="done"
              ref={this.passwordInputRef}
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              label={'Password'}
              placeholder={'Password'}
              onBlur={this.handlePasswordBlur}
              error={passwordError}
            />
            <Button
              label={'Login'}
              onPress={this.handleLoginPress}
              disabled={!email || !password}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: theme.WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: theme.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    //flex: 1,
    width: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    //flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default LoginScreen;
