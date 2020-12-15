import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../atoms';

const MenuBox = () => {
  return (
    <View style={styles.container}>
      <Button type="icon-with-label" icon="icon-id-card" label="ID Card" />
      <Button type="icon-with-label" icon="icon-schedule" label="Schedule" />
      <Button
        type="icon-with-label"
        icon="icon-achievement"
        label="Achievement"
      />
      <Button
        type="icon-with-label"
        icon="icon-academic"
        label="Academic Guidence"
      />
      <Button
        type="icon-with-label"
        icon="icon-pre-registration"
        label="Pre Registration"
      />
      <Button
        type="icon-with-label"
        icon="icon-account"
        label="Account Balance"
      />
    </View>
  );
};

export default MenuBox;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: 370,
    height: 197,

    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
