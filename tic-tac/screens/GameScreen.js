import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TButton from '../components/TButton';

export default function GameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>X</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>O</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>X</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>O</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>X</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>O</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>X</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}></Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>O</Text>
          </View>
        </View>
      </View>

      <TButton label="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    padding: 10,
    backgroundColor: 'orange',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
});
