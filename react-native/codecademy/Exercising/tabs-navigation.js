import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed</Text>
  </View>
);

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={FeedScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});