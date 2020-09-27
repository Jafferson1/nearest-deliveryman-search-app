/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import {Nav} from './src/screens/Nav';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('IS AUTHENTICATED -> ' + this.props.isAuthenticated);
  }

  render() {
    const {isAuthenticated} = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isAuthenticated ? 'Nav' : 'Login'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Nav" component={Nav} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (store) => ({
  isAuthenticated: store.isAuthenticatedReducer.isAuthenticated,
});

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
});
