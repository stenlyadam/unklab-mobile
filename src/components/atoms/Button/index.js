import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconOnly from './IconOnly';

const Button = ({label, onPress, type, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34048A',
    paddingVertical: 18,
    borderRadius: 10,
  },
  label: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
