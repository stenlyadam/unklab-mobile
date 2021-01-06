import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  IconArrow,
  IconArrowWhite,
  IconCalendar,
  IconClose,
  IconDownload,
  IconInfo,
  IconNotification,
  IconPay,
  IconSearch,
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
    } else if (icon === 'icon-search') {
      return <IconSearch />;
    } else if (icon === 'icon-download') {
      return <IconDownload />;
    } else if (icon === 'icon-calendar') {
      return <IconCalendar />;
    } else if (icon === 'icon-pay') {
      return <IconPay />;
    } else if (icon === 'icon-close') {
      return <IconClose />;
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
