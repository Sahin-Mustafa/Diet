import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import Config from 'react-native-config';

import useFetch from '../../useHook/useFetch';
import MealWrite from '../MealWrite/MealWrite';
import styles from './DailyMenu.style';
import axios from 'axios';

const DailyMenu = ({
  namelength,
  weeklyMenu,
  year,
  month,
  date,
  day,
  buttonView = true,
}) => {
  const dispatch = useDispatch();

  const removeFood = async (food_name, meal) => {
    let foodIndex = weeklyMenu.week[day][meal].indexOf(food_name);
    try {
      const {data: responsData} = await axios.get(
        `${Config.Food_Api}/item?nix_item_id=${weeklyMenu.foodId[day][meal][foodIndex]}`,
        {
          headers: {
            'x-app-id': '69f1759f',
            'x-app-key': '0675eda1a89cfb70a7881830b9c7bb9d',
            'x-remote-user-id': '0',
          },
        },
      );

      dispatch({
        type: 'REMOVE_FOOD',
        payload: {
          food: responsData.foods,
          year: year,
          month: month,
          date: date,
          day: day,
          meal: meal,
        },
      });
    } catch (err) {
      console.log(err);
      //Request failed with status code 401
    }
  };
  return (
    <View>
      <View style={styles.meal_container}>
        <Text style={styles.meal_header}>Breakfast</Text>
        <FlatList
          style={styles.flatlist}
          data={weeklyMenu.week[day][0]}
          keyExtractor={(_, index) => {
            index.toString();
          }}
          renderItem={({item}) => (
            <MealWrite
              namelength={namelength}
              item={item}
              removeFood={() => removeFood(item, 0)}
              buttonView={buttonView}
            />
          )}
        />
      </View>
      <View style={styles.meal_container}>
        <Text style={styles.meal_header}>Lunch</Text>
        <FlatList
          style={styles.flatlist}
          data={weeklyMenu.week[day][1]}
          keyExtractor={(_, index) => {
            index.toString();
          }}
          renderItem={({item}) => (
            <MealWrite
              namelength={namelength}
              item={item}
              removeFood={() => removeFood(item, 1)}
              buttonView={buttonView}
            />
          )}
        />
      </View>
      <View style={styles.meal_container}>
        <Text style={styles.meal_header}>Dinner</Text>
        <FlatList
          style={styles.flatlist}
          data={weeklyMenu.week[day][2]}
          keyExtractor={(_, index) => {
            index.toString();
          }}
          renderItem={({item}) => (
            <MealWrite
              namelength={namelength}
              item={item}
              removeFood={() => removeFood(item, 2)}
              buttonView={buttonView}
            />
          )}
        />
      </View>
      <View style={styles.meal_container}>
        <Text style={styles.meal_header}>Snack</Text>
        <FlatList
          style={styles.flatlist}
          data={weeklyMenu.week[day][3]}
          ListFooterComponent={() => (
            <View
              style={{
                height: 25,
              }}
            />
          )}
          keyExtractor={(_, index) => {
            index.toString();
          }}
          renderItem={({item}) => (
            <MealWrite
              namelength={namelength}
              item={item}
              removeFood={() => removeFood(item, 3)}
              buttonView={buttonView}
            />
          )}
        />
      </View>
    </View>
  );
};
export default DailyMenu;
/*
const remove = {
  foods: [
    {
      alt_measures: null,
      brand_name: 'Burgers by Amylu',
      brick_code: null,
      class_code: null,
      food_name: 'Chicken Burgers, Fully Cooked Charbroiled',
      full_nutrients: [Array],
      lat: null,
      lng: null,
      metadata: [Object],
      ndb_no: null,
      nf_calories: 170,
      nf_cholesterol: 90,
      nf_dietary_fiber: 1,
      nf_ingredient_statement: null,
      nf_p: null,
      nf_potassium: 235,
      nf_protein: 18,
      nf_saturated_fat: 4,
      nf_sodium: 640,
      nf_sugars: 1,
      nf_total_carbohydrate: 5,
      nf_total_fat: 9,
      nix_brand_id: '538744877dc556f117af04e1',
      nix_brand_name: 'Burgers by Amylu',
      nix_item_id: '629f4bd7a8735f0008fe9072',
      nix_item_name: 'Chicken Burgers, Fully Cooked Charbroiled',
      note: null,
      photo: [Object],
      serving_qty: 1,
      serving_unit: 'burger',
      serving_weight_grams: 112,
      source: 8,
      tag_id: null,
      tags: null,
      updated_at: '2022-06-07T13:00:07+00:00',
    },
  ],
};
*/
