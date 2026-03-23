import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function Title({ text }) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: 20,
  },
});
