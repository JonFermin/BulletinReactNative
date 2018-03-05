'use strict';
import React, { Component } from 'react';
import { StyleSheet,
         AppRegistry,
         Text, 
         View,
         NavigatorIOS,
         Platform 
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Component1 from './app/components/Component1/Component1.js'

      // <Text style={styles.description}> 
      //   Hello World
      // </Text>

export default class App extends React.Component {
  render() {
    return (
    <View id="parent">

      <Component1 />
      <Component1 />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('myapp', () => myapp);