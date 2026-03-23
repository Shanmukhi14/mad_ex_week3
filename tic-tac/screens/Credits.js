import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';
import TButton from '../components/TButton';
import colors from '../constants/colors';

export default function Credits({ navigation }) {
  return (
    <View style={styles.container}>
      <Title text="Credits" />
      <Text style={styles.text}>
        This Tic Tac Toe app was created for the Week 3 lab.
        {'\n\n'}
        It extends the Week 2 board by adding navigation and reusable components.
      </Text>
      <TButton label="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    backgroundColor: colors.panel,
    color: colors.textLight,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    lineHeight: 22,
    width: '90%',
    textAlign: 'center',
  },
});
