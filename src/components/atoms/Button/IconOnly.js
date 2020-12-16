import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  IconArrow,
  IconArrowWhite,
  IconInfo,
  IconNotification,
} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'icon-arrow') {
      return <IconArrow />;
    } else if (icon === 'icon-notification') {
      return <IconNotification />;
    } else if (icon === 'icon-arrow-white') {
      return <IconArrowWhite />;
    } else if (icon === 'icon-info') {
      return <IconInfo />;
    }
    return <IconArrow />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
