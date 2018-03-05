'use strict';
import React, { Component } from 'react';
import { StyleSheet,
         AppRegistry,
         Text, 
         View,
         NavigatorIOS,
         Platform 
} from 'react-native';

export default class Component1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'Jepp',
      showName: false,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hi There'
  }

  render() {
    let name = this.state.showName ? this.state.name : 'No Name';

    return (
    <View id="parent">
      <Text style={styles.description}> {this.state.message} </Text>
      <Text> {name} </Text>
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