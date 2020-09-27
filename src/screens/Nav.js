import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import theme from '../config/theme';
import HomeScreen from './HomeScreen';
import ListDelivery from './ListDelivery';
import SettingsScreen from './SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

export const Nav = () => {
  return (
    <Tab.Navigator
      //labeled={false}
      activeColor={theme.WHITE}
      inactiveColor={theme.SILVER}
      backBehavior="none"
      //shifting={true}
      barStyle={{
        backgroundColor: theme.DODGER_BLUE,
      }}
      // tabBarOptions={{
      //     activeTintColor: '#343148',
      //     inactiveTintColor: 'gray',
      // }}
      initialRouteName="Inicio">
      <Tab.Screen
        name="Entregas"
        component={ListDelivery}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="map-marker-alt" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name="settings" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
