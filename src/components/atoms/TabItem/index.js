import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets';

const TabItem = ({label, onPress, onLongPress, active}) => {
  const Icon = () => {
    if (label === 'Dashboard') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (label === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconProfile />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  label: {
    color: 'white',
  },
});
