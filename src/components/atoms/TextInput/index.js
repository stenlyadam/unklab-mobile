import React from 'react';
import {StyleSheet, Text, View, TextInput as Input} from 'react-native';

const TextInput = ({label, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: '#908A8A',
    marginBottom: 12,
  },
  input: {
    borderColor: '#DCDCDC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 15,
  },
});
