import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconArrow, IconNotification} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'icon-arrow') {
      return <IconArrow />;
    } else if (icon === 'icon-notification') {
      return <IconNotification />;
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
