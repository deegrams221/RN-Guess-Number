import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';
import Fonts from '../constants/fonts';
import Card from '../components/Card';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.infoCard}>
        <Text style={styles.fontOne}>The Game is Over!</Text>
        <Text style={styles.fontTwo}>Number of rounds: {props.roundsNumber}</Text>
        <Text style={styles.fontTwo}>Number was: {props.userNumber}</Text>
      </Card>
      <View style={styles.button}><Button title='NEW GAME' onPress={props.onRestart} color={Colors.secondary} /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoCard: {
    width: '70%',
    alignItems: 'center',
  },
  fontOne: {
    fontSize: Fonts.fontOne,
  },
  fontTwo: {
    fontSize: Fonts.fontTwo,
  },
  button: {
    width: '45%',
    marginTop: 10,
  },
});

export default GameOverScreen;
