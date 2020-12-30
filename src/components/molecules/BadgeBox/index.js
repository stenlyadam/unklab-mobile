import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  IconBadgeLevel1,
  IconBadgeLevel2,
  IconBadgeLevel3,
  IconBadgeLevel4,
} from '../../../assets';

const BadgeBox = () => {
  return (
    <View style={styles.container}>
      <IconBadgeLevel1 />
      <IconBadgeLevel2 />
      <IconBadgeLevel3 />
      <IconBadgeLevel4 />
    </View>
  );
};

export default BadgeBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 370,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    justifyContent: 'space-between',
  },
});
