import React from 'react';
import {Pressable, StyleSheet, View } from 'react-native';

const App = () => (
  <View style={styles.layout} >
    <Pressable> {/* if you press the div will change the backgroundColor */}
      {(state) => <Box pressed={state.pressed} />}
    </Pressable>
  </View>
);

export default App;

export const Box = (props) => (
    <View style={[styles.box, props.pressed && { backgroundColor: 'blue' }]} />
);

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});