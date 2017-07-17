import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

//router load
import { Router, Scene } from 'react-native-router-flux'

//Screen Component load
import HomeScreen from './src/Screen/HomeScreen'
import AircornScreen from './src/Screen/AircornScreen'
import InputScreen from './src/Screen/InputScreen'


export default class App extends Component {
      
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="homescreen"
            component={HomeScreen}
            title="Home"
            initial
          />
          <Scene
            key="aircornscreen"
            component={AircornScreen}
            title="Aircorn"
          />
          <Scene
            key="inputscreen"
            component={InputScreen}
            title="Input"
          />
        </Scene>
      </Router>
    );
  }
}