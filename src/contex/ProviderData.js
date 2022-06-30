import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducer';

const ProviderData = ({children}) => {
  const [userData, setUserData] = useState({
    name: '',
    age: 0,
    weight: 0,
    height: 0,
    neck: 0,
    waist: 0,
    hip: 0,
    gender: -1,
    fat: 0,
    daily_calori: 0,
    daily_protein: 0,
    daily_fat: 0,
    daily_carbohydrate: 0,
  });
  const [dailyData, setDailyData] = useState({
    time: '',
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    calories: 0,
  });
  let [weeklyMenu, setWeeklyMenu] = useState({
    week: [
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
    ],
    foodId: [
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
    ],
  });
  const [montlyData, setMontlyData] = useState({days: [], data: []});

  useEffect(() => {
    /*AsyncStorage.getItem('daily').then
    AsyncStorage.getItem('weekly').then hafızadan sil */
    AsyncStorage.getItem('user_info').then(s => {
      s ? setUserData(JSON.parse(s)) : setUserData(userData);
    });
    AsyncStorage.getItem('dailyData').then(s => {
      s ? setDailyData(JSON.parse(s)) : setDailyData(dailyData);
    });
    AsyncStorage.getItem('weeklyMenu').then(s => {
      s ? setWeeklyMenu(JSON.parse(s)) : setWeeklyMenu(weeklyMenu);
    });
    AsyncStorage.getItem('montly').then(s => {
      s ? setMontlyData(JSON.parse(s)) : setMontlyData(montlyData);
    });
  }, []);
  const store = createStore(reducer, {
    userData,
    dailyData,
    weeklyMenu,
    montlyData,
  });
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderData;
