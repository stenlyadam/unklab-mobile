import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Check from '@react-native-community/checkbox';

const CheckBox = ({label}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <Check
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
  },
});
