import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const App = () => (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: 'red' }]} />
    <View style={[styles.box, { backgroundColor: 'green' }]} />
  </View>
);

export default App;

// Get the maximum width/height (in dp) from the Dimensions API
const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  layout: {
    width: MAX_WIDTH,
    height: MAX_HEIGHT,
    backgroundColor: '#e5e5e5',
  },
  box: {
    width: MAX_WIDTH,
    height: MAX_HEIGHT / 2,
    backgroundColor: 'black',
  },
});