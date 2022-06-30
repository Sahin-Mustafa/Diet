import AsyncStorage from '@react-native-async-storage/async-storage';
import {and} from 'react-native-reanimated';

export default function (state, action) {
  let userData = state.userData;
  let dailyData = state.dailyData;
  let weeklyMenu = state.weeklyMenu;
  let montly = state.montlyData;
  switch (action.type) {
    case 'USER_INFO':
      userData = action.payload.data;
      console.log('dispatvh içindeyim', userData);
      try {
        const jsonValue = JSON.stringify(userData);
        AsyncStorage.setItem('user_info', jsonValue);
      } catch (err) {
        console.log('user infoya set ederken', err);
      }
      return {...state, userData};

    case 'ADD_FOOD':
      let {food, year, month, date, day, meal} = action.payload;
      let time = `${day}/${date}/${month}/${year}`;
      const dayControl = dailyData.time.split('/');
      if (time !== dailyData.time) {
        dailyData = {protein: 0, fat: 0, carbohydrate: 0, calories: 0};
        montly.days.push(time);
        if (montly.days.length > 31) {
          montly.days.shift();
          montly.data.shift();
        }
        if (`${day}` === dayControl[0] && `(${date}` !== dayControl[1]) {
          weeklyMenu.week[day] = [[], [], [], []];
          weeklyMenu.foodId[day] = [[], [], [], []];
        }
      }

      dailyData.time = time;
      console.log('zaman', dailyData.time);
      dailyData.protein += Math.round(100 * food.full_nutrients[0].value) / 100;
      dailyData.fat += Math.round(100 * food.full_nutrients[1].value) / 100;
      dailyData.carbohydrate +=
        Math.round(100 * food.full_nutrients[2].value) / 100;
      dailyData.calories +=
        Math.round(100 * food.full_nutrients[3].value) / 100;

      let monthData = [
        dailyData.protein,
        dailyData.fat,
        dailyData.carbohydrate,
        dailyData.calories,
      ];

      weeklyMenu.week[day][meal].push(food.food_name);
      weeklyMenu.foodId[day][meal].push(food.nix_item_id);

      let montlyIndexDay = montly.days.indexOf(time);
      montly.data[montlyIndexDay] = monthData;

      AsyncStorage.setItem('weeklyMenu', JSON.stringify(weeklyMenu));
      AsyncStorage.setItem('dailyData', JSON.stringify(dailyData));
      AsyncStorage.setItem('montly', JSON.stringify(montly));
      console.log('eklendi:\n', weeklyMenu.week[day][meal]);

      return {...state, weeklyMenu, dailyData, montlyData: montly};

    case 'REMOVE_FOOD':
      food = action.payload.food;
      year = action.payload.year;
      month = action.payload.month;
      date = action.payload.date;
      day = action.payload.day;
      meal = action.payload.meal;
      time = `${month}/${date}/${year}`;

      let indexFood = weeklyMenu.week[day][meal].indexOf(food[0].food_name);

      if (indexFood > -1) {
        weeklyMenu.week[day][meal].splice(indexFood, 1); // 2nd parameter means remove one item only
        weeklyMenu.foodId[day][meal].splice(indexFood, 1);
      }

      dailyData.protein -= food[0].nf_protein / 4;
      dailyData.fat -= food[0].nf_total_fat / 4;
      dailyData.carbohydrate -= food[0].nf_total_carbohydrate / 4;
      dailyData.calories -= food[0].nf_calories / 4;

      monthData = [
        dailyData.protein,
        dailyData.fat,
        dailyData.carbohydrate,
        dailyData.calories,
      ];

      montlyIndexDay = montly.days.indexOf(time);
      montly.data[montlyIndexDay] = monthData;

      AsyncStorage.setItem('weeklyMenu', JSON.stringify(weeklyMenu));
      AsyncStorage.setItem('dailyData', JSON.stringify(dailyData));
      AsyncStorage.setItem('montly', JSON.stringify(montly));

      return {...state, weeklyMenu, dailyData, montlyData: montly};

    default:
      return state;
  }
}
