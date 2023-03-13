import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TouchableHighlight } from 'react-native';

const PlateauScreen = () => {
  const [grille, setGrille] = useState<number[][]>([
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 3, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);

  const renderCase = (value: number, row: number, col: number) => {
    let caseStyle = styles.case;
    switch (value) {
      case 1:
        caseStyle = styles.mur;
        break;
      case 2:
        caseStyle = styles.caisse;
        break;
      case 3:
        caseStyle = styles.objectif;
        break;
      case 4:
        caseStyle = styles.personnage;
        break;
    }
    return (
        <TouchableHighlight key={`${row}-${col}`} style={caseStyle} onPress={() => onCasePress(row, col)}>
        <View>
          {value === 3 && <View style={styles.objectifInner} />}
        </View>
      </TouchableHighlight>
    );
  };

  const renderRow = (row: number[], rowIndex: number) => {
    return (
      <View key={rowIndex} style={styles.row}>
        {row.map((value, colIndex) => renderCase(value, rowIndex, colIndex))}
      </View>
    );
  };

  const onCasePress = (row: number, col: number) => {
    // Logique de gestion de la déplacement du personnage et des caisses ici
  };

  return (
    <View style={styles.container}>
      {grille.map((row, rowIndex) => renderRow(row, rowIndex))}
      <Text style={styles.title}>Jeu de Sokoban</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  case: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: '#999',
  },
  mur: {
    width: 50,
    height: 50,
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#999',
  },
  caisse: {
    width: 50,
    height: 50,
    backgroundColor: '#f90',
    borderWidth: 1,
    borderColor: '#999',
  },
  objectif: {
    width: 50,
    height: 50,
    backgroundColor: '#39f',
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  objectifInner: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  personnage: {
    width: 50,
    height: 50,
    backgroundColor: '#f00',
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
});



export default PlateauScreen;