import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MealWrite.style';

const MealWrite = ({namelength = 40, item, removeFood, buttonView = true}) => {
  return (
    <View style={styles.flatlist_inner_container}>
      <Text>
        {item.length < namelength ? item : item.slice(0, namelength) + '...'}
      </Text>
      {buttonView && (
        <View style={styles.flatlist_button_container}>
          <TouchableOpacity
            style={styles.flatlist_button}
            onPress={() => removeFood()}>
            <Icon name="delete" size={25} color="red" />
          </TouchableOpacity>
          {/*cancel 
          <TouchableOpacity style={styles.flatlist_button}>
            <Icon name="eye-arrow-right" size={25} color="#6ac5fe" />
          </TouchableOpacity> */}
        </View>
      )}
    </View>
  );
};
export default MealWrite;
