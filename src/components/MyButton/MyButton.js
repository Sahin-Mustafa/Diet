import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './MyButton.style';

const MyButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default MyButton;
