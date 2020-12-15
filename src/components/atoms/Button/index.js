import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconOnly from './IconOnly';
import IconWithLabel from './IconWithLabel';

const Button = ({
  label,
  onPress,
  type,
  icon,
  width,
  height,
  paddingVertical,
}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (type === 'icon-with-label') {
    return <IconWithLabel icon={icon} onPress={onPress} label={label} />;
  }

  return (
    <TouchableOpacity
      style={styles.container(width, height, paddingVertical)}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (width, height, paddingVertical) => ({
    backgroundColor: '#34048A',
    paddingVertical: paddingVertical,
    borderRadius: 10,
    width: width,
    height: height,
  }),
  label: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
