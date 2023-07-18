import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Octicons from "react-native-vector-icons/Octicons";

const Icon = ({onPress, icon, size = 32}) => {
  const icon = (
    <Octicons
      name={icon}
      size={size}
    />
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
  }
  return icon;
};

export default Icon;