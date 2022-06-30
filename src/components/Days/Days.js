import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Days.style';

const Days = ({day, handleSelectedDayString, dayString}) => {
  return (
    <TouchableOpacity onPress={handleSelectedDayString}>
      <View
        style={
          day === dayString
            ? styles.secondary.container
            : styles.primary.container
        }>
        <Text style={styles.primary.text}>{day}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Days;
