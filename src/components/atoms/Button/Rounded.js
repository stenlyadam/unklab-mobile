import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Rounded = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Rounded;

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: 56,
    backgroundColor: '#34048A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 56 / 2,
  },
  label: {
    color: 'white',
    fontSize: 18,
  },
});
