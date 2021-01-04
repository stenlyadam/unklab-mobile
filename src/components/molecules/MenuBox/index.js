import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import {Button} from '../../atoms';

const MenuBox = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        type="icon-with-label"
        icon="icon-id-card"
        label="ID Card"
        onPress={() => navigation.navigate('StudentCard')}
      />
      <Button
        type="icon-with-label"
        icon="icon-schedule"
        label="Schedule And Grade"
        onPress={() => navigation.navigate('Schedule')}
      />
      <Button
        type="icon-with-label"
        icon="icon-account"
        label="Account Balance"
        onPress={() => navigation.navigate('AccountBalance')}
      />
      {/* <Button
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
      /> */}
    </View>
  );
};

export default MenuBox;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: '100%',
    // height: 197,
    height: 150,
    borderRadius: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
