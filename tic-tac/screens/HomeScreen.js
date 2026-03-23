import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import TButton from '../components/TButton';
import colors from '../constants/colors';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title text="Tic Tac Toe" />
      <TButton label="Start Game" onPress={() => navigation.navigate('Game')} />
      <TButton label="Credits" onPress={() => navigation.navigate('Credits')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
