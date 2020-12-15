import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconAcademic,
  IconAccountBalance,
  IconAchievement,
  IconIDCard,
  IconPreRegistration,
  IconSchedule,
} from '../../../assets';

const IconWithLabel = ({onPress, icon, label}) => {
  const Icon = () => {
    if (icon === 'icon-id-card') {
      return <IconIDCard />;
    } else if (icon === 'icon-schedule') {
      return <IconSchedule />;
    } else if (icon === 'icon-achievement') {
      return <IconAchievement />;
    } else if (icon === 'icon-academic') {
      return <IconAcademic />;
    } else if (icon === 'icon-pre-registration') {
      return <IconPreRegistration />;
    } else if (icon === 'icon-account') {
      return <IconAccountBalance />;
    }
    return <IconIDCard />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconWithLabel;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 60,
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
  },
});
