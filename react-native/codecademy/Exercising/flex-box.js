//some information for flex: 1 or 2. 
//example 1: 3x flex:1= the width is evenly for 3 divs
//example 2: flex:1 + flex:2 + flex:1 = first and last div's take 1 spacec and the middle div takes double space


import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const App = () => (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: 'red' }]} />
    <View style={[styles.box, { backgroundColor: 'green' }]} />
    {/* <View style={[styles.box, { backgroundColor: 'purple' }]} /> */}
  </View>
);

export default App;

// Get the maximum width/height (in dp) from the Dimensions API
const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  box: {
    flex: 1,
    backgroundColor: 'black',
  },
});