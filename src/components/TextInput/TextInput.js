import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './TextInput.style';

const MyInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor="black"
      />
    </View>
  );
};
export default MyInput;
