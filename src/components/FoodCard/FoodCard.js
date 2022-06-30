import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './FoodCard.style';
const FoodCard = ({
  food,
  onPressBreakFast,
  onPressLuch,
  onPressDinner,
  onPressSnack,
}) => {
  const [breakfast, setBreakfast] = React.useState(false);
  const [lunch, setlunch] = React.useState(false);
  const [dinner, setDinner] = React.useState(false);
  const [snack, setSnack] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{uri: food.photo.thumb}} />
        </View>
        <View style={styles.food_detail_container}>
          <Text numberOfLines={1} style={styles.food_name}>
            {food.food_name}
          </Text>
          <View style={{borderWidth: 0.5, marginVertical: 5}}></View>
          <View style={styles.nutrients_container}>
            <View style={styles.calori_protein_container}>
              <View style={styles.calori_container}>
                <Text style={styles.nutrients_text}>Calori: </Text>
                <Text style={styles.nutrients_value}>
                  {food.full_nutrients[3].value / 4}
                </Text>
              </View>
              <View style={styles.calori_container}>
                <Text style={styles.nutrients_text}>Protein: </Text>
                <Text style={styles.nutrients_value}>
                  {food.full_nutrients[0].value / 4}
                </Text>
              </View>
            </View>
            <View style={styles.fat_crbhydrt_container}>
              <View style={styles.calori_container}>
                <Text style={styles.nutrients_text}>Fat:</Text>
                <Text style={styles.nutrients_value}>
                  {food.full_nutrients[1].value / 4}
                </Text>
              </View>
              <View style={styles.calori_container}>
                <Text style={styles.nutrients_text}>Carbohydrate: </Text>
                <Text style={styles.nutrients_value}>
                  {food.full_nutrients[2].value / 4}
                </Text>
              </View>
            </View>
          </View>
          <View style={{borderWidth: 0.5, marginVertical: 5}}></View>
          <View style={styles.repast_button_container}>
            <View style={styles.inner_repast_button_container}>
              <TouchableOpacity
                style={
                  breakfast
                    ? {...styles.button, backgroundColor: '#60ba62'}
                    : styles.button
                }
                onPress={() => {
                  if (!breakfast) {
                    onPressBreakFast();
                    setBreakfast(true);
                  }
                }}>
                <Text style={styles.button_text}>Breakfast</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  dinner
                    ? {...styles.button, backgroundColor: '#60ba62'}
                    : styles.button
                }
                onPress={() => {
                  if (!dinner) {
                    onPressDinner(), setDinner(true);
                  }
                }}>
                <Text style={styles.button_text}>Dinner</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inner_repast_button_container}>
              <TouchableOpacity
                style={
                  lunch
                    ? {...styles.button, backgroundColor: '#60ba62'}
                    : styles.button
                }
                onPress={() => {
                  if (!lunch) {
                    onPressLuch(), setlunch(true);
                  }
                }}>
                <Text style={styles.button_text}>Lunch</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  snack
                    ? {...styles.button, backgroundColor: '#60ba62'}
                    : styles.button
                }
                onPress={() => {
                  if (!snack) {
                    onPressSnack(), setSnack(true);
                  }
                }}>
                <Text style={styles.button_text}>Snack</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;
