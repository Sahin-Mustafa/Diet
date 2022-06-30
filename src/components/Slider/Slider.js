import React from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';

import styles from './Slider.style';

const MySlider = ({title, value, minValue, maxValue, onValueChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.slider_title}>{title}</Text>
      <View style={styles.slider_container}>
        <View style={styles.value_container}>
          <Text style={styles.value}>{value}</Text>
        </View>
        <Slider
          style={styles.slider}
          onValueChange={onValueChange}
          step={1}
          minimumValue={minValue}
          maximumValue={maxValue}
          minimumTrackTintColor="#c9830a"
          maximumTrackTintColor="#073f07"
        />
      </View>
    </View>
  );
};
export default MySlider;
