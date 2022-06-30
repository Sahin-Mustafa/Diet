import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './CustomHeader.style';
const CustomHeader = ({title, navigation, drawerOpen = true}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={
          drawerOpen
            ? () => {
                navigation.toggleDrawer();
              }
            : () => {
                navigation.goBack();
              }
        }>
        {drawerOpen ? (
          <Icon name="dots-horizontal-circle-outline" size={25} />
        ) : (
          <Icon name="arrow-left-circle-outline" size={25} />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default CustomHeader;
