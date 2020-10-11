import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import theme from '../config/theme';
import cityMap from '../assets/images/city-map.png';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOn, setIsOn] = React.useState(false);
  const {container, backgroundImg, buttonWinn, buttonPower} = style;
  return (
    <View>
      <ImageBackground
        source={cityMap}
        style={container}
        imageStyle={backgroundImg}>
        <TouchableOpacity style={buttonWinn}>
          <Text style={{color: theme.WHITE}}>$ 0.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonPower}>
          <Animatable.Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite">
            {!isLoading ? (
              <Icon
                name={!isOn ? 'power' : 'power-cycle'}
                size={40}
                color={theme.WHITE}
              />
            ) : (
              <ActivityIndicator size="small" color={theme.WHITE} />
            )}
          </Animatable.Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    zIndex: 1,
  },
  backgroundImg: {
    width: width,
    height: height / 1.2,
  },
  buttonWinn: {
    width: 90,
    height: 50,
    marginBottom: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.DEFAULT,
    borderRadius: 50,
    shadowColor: theme.GRAY,
    shadowOpacity: 0.8,
    elevation: 10,
    shadowOffset: {width: 1, height: 13},
  },
  buttonPower: {
    width: 67,
    height: 66,
    marginTop: 90,
    backgroundColor: theme.DEFAULT,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.GRAY,
    shadowOpacity: 0.8,
    elevation: 10,
    shadowOffset: {width: 1, height: 13},
  },
});
