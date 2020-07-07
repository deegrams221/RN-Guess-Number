import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});


// Left off at 3:58:24
// Academind
// React Native Tutorial for Beginners - Crash Course 2020
// https://www.youtube.com/watch?v=qSRrxpdMpVc