import React from 'react';
import {View, Text} from 'react-native';

import styles from './DailyInfoCard.style';
const DailyInfo = ({calories, fat, protein, carbohydrate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>Your daily need</Text>
      <View style={styles.inner_container}>
        <View style={styles.nutritional_text}>
          <Text>Calories (g)</Text>
          <Text>Fat (g)</Text>
          <Text>Carbohydrate (g)</Text>
          <Text>Protein (g)</Text>
        </View>
        <View style={styles.nutritional_value}>
          <Text>{calories} </Text>
          <Text>{fat} </Text>
          <Text>{carbohydrate} </Text>
          <Text>{protein} </Text>
        </View>
      </View>
    </View>
  );
};
export default DailyInfo;
