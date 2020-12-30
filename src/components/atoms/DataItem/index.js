import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DataItem = ({label, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default DataItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
    paddingVertical: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
  },
  description: {
    textAlign: 'right',
  },
});
