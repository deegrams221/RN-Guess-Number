import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});


// Left off at 4:51:13
// Academind
// React Native Tutorial for Beginners - Crash Course 2020
// https://www.youtube.com/watch?v=qSRrxpdMpVc