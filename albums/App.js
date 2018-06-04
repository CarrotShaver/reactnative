/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.backgroundStyle}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#DCD0C0'
  }

};

