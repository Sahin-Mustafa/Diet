import AsyncStorage from '@react-native-async-storage/async-storage';
export default function (state, action) {
  switch (action.type) {
    case 'USER_INFO':
      const userData = action.payload.data;
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
      const dayControl = state.dailyData.time.split('/');
      if (time !== state.dailyData.time) {
        state.dailyData = {protein: 0, fat: 0, carbohydrate: 0, calories: 0};
        state.montlyData.days.push(time);
        if (state.montlyData.days.length > 31) {
          state.montlyData.days.shift();
          state.montlyData.data.shift();
        }
        if (`${day}` === dayControl[0] && `(${date}` !== dayControl[1]) {
          state.weeklyMenu.week[day] = [[], [], [], []];
          state.weeklyMenu.foodId[day] = [[], [], [], []];
        }
      }

      state.dailyData.time = time;
      console.log('zaman', state.dailyData.time);
      state.dailyData.protein +=
        Math.round(100 * food.full_nutrients[0].value) / 100;
      state.dailyData.fat +=
        Math.round(100 * food.full_nutrients[1].value) / 100;
      state.dailyData.carbohydrate +=
        Math.round(100 * food.full_nutrients[2].value) / 100;
      state.dailyData.calories +=
        Math.round(100 * food.full_nutrients[3].value) / 100;

      let monthData = [
        state.dailyData.protein,
        state.dailyData.fat,
        state.dailyData.carbohydrate,
        state.dailyData.calories,
      ];

      state.weeklyMenu.week[day][meal].push(food.food_name);
      state.weeklyMenu.foodId[day][meal].push(food.nix_item_id);

      let montlyIndexDay = state.montlyData.days.indexOf(time);
      state.montlyData.data[montlyIndexDay] = monthData;

      AsyncStorage.setItem('weeklyMenu', JSON.stringify(state.weeklyMenu));
      AsyncStorage.setItem('dailyData', JSON.stringify(state.dailyData));
      AsyncStorage.setItem('montly', JSON.stringify(state.montlyData));
      console.log('eklendi:\n', state.montlyData);

      return {
        ...state,
        weeklyMenu: state.weeklyMenu,
        dailyData: state.dailyData,
        montlyData: state.montlyData,
      };

    case 'REMOVE_FOOD':
      food = action.payload.food;
      year = action.payload.year;
      month = action.payload.month;
      date = action.payload.date;
      day = action.payload.day;
      meal = action.payload.meal;
      time = `${month}/${date}/${year}`;

      let indexFood = state.weeklyMenu.week[day][meal].indexOf(
        food[0].food_name,
      );

      if (indexFood > -1) {
        state.weeklyMenu.week[day][meal].splice(indexFood, 1); // 2nd parameter means remove one item only
        state.weeklyMenu.foodId[day][meal].splice(indexFood, 1);
      }

      state.dailyData.protein -= food[0].nf_protein / 4;
      state.dailyData.fat -= food[0].nf_total_fat / 4;
      state.dailyData.carbohydrate -= food[0].nf_total_carbohydrate / 4;
      state.dailyData.calories -= food[0].nf_calories / 4;

      monthData = [
        state.dailyData.protein,
        state.dailyData.fat,
        state.dailyData.carbohydrate,
        state.dailyData.calories,
      ];

      montlyIndexDay = state.montlyData.days.indexOf(time);
      state.montlyData.data[montlyIndexDay] = monthData;

      AsyncStorage.setItem('weeklyMenu', JSON.stringify(state.weeklyMenu));
      AsyncStorage.setItem('dailyData', JSON.stringify(state.dailyData));
      AsyncStorage.setItem('montly', JSON.stringify(state.montlyData));

      return {
        ...state,
        weeklyMenu: state.weeklyMenu,
        dailyData: state.dailyData,
        montlyData: state.montlyData,
      };

    default:
      return state;
  }
}
