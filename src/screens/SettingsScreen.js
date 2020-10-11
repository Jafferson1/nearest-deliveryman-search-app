import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {store, setIsAuthenticated} from '../../store';
import theme from '../config/theme';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {button, text, spinnerTextStyle} = styles;
  const navigation = useNavigation();
  const onExit = async () => {
    setIsLoading(true);
    await AsyncStorage.clear();
    store.dispatch(setIsAuthenticated(false));
    setIsLoading(false);
    navigation.navigate('Login');
  };

  return (
    <View>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={spinnerTextStyle}
      />
      <Text>This screen will show the settings</Text>
      <TouchableHighlight style={button} onPress={onExit}>
        <Text style={text}>Exit</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  button: {
    marginVertical: 40,
    marginHorizontal: 10,
    backgroundColor: theme.DEFAULT,
    padding: 15,
    borderRadius: 100
  },
  text: {
    color: theme.WHITE,
    textAlign: 'center',
  },
  spinnerTextStyle: {
    color: theme.WHITE,
  },
});
