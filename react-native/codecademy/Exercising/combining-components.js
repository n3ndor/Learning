import React from 'react';
import { View, Text } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    <View style={{ width: 100, height: 100, backgroundColor: 'green' }} />
    <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
  </View>
);

export default App;

export const Box = () => (
  // Move a box `View` component here
);