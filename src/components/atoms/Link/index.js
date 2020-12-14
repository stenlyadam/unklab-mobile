import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Link = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  label: {
    color: '#4D5BB6',
    fontSize: 12,
    fontWeight: '400',
  },
});
