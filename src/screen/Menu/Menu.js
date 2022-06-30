import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash';
import Config from 'react-native-config';

import MyInput from '../../components/TextInput/TextInput';
import useFetch from '../../useHook/useFetch';
import DailyMenu from '../../components/DailyMenu/DailyMenu';
import FoodCard from '../../components/FoodCard/FoodCard';
import styles from './Menu.style';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
const Menu = ({navigation, route}) => {
  const dispatch = useDispatch();
  const selectorData = useSelector(item => item.weeklyMenu, _.isEqual);
  const [weeklyMenu, setWeeklyMenu] = React.useState(selectorData);

  const [search, setSearch] = React.useState(null);
  const {data, loading, error, fetchData} = useFetch();

  const [year, setYear] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [date, setDate] = React.useState(0);
  const [month, setMonth] = React.useState(0);

  React.useEffect(() => {
    const d = new Date();
    setMonth(d.getMonth());
    setDate(d.getDate());
    setDay(d.getDay());
    setYear(d.getFullYear());
  }, []);
  React.useEffect(() => {
    setWeeklyMenu(selectorData);
  }, [selectorData]);
  React.useEffect(() => {
    fetchData(
      `${Config.Food_Api}/instant?query=${search}&common=true&detailed=true`,
      {
        headers: {
          'x-app-id': '69f1759f',
          'x-app-key': '0675eda1a89cfb70a7881830b9c7bb9d',
          'x-remote-user-id': '0',
        },
      },
    );
    // console.log('data', data.branded);
  }, [search]);
  const handlePressAddFood = (food, meal) => {
    dispatch({
      type: 'ADD_FOOD',
      payload: {
        food: food,
        year: year,
        month: month,
        date: date,
        day: day,
        meal: meal,
      },
    });
  };
  const renderItem = ({item}) => (
    <FoodCard
      food={item}
      onPressBreakFast={() => handlePressAddFood(item, 0)}
      onPressLuch={() => handlePressAddFood(item, 1)}
      onPressDinner={() => handlePressAddFood(item, 2)}
      onPressSnack={() => handlePressAddFood(item, 3)}
    />
  );
  return (
    <View style={styles.container}>
      <CustomHeader title="Menu" navigation={navigation} />
      <ScrollView style={styles.inner_container}>
        <MyInput value={search} placeholder="Search" onChangeText={setSearch} />
        {search && !loading ? (
          <FlatList
            data={data.branded}
            renderItem={renderItem}
            ListFooterComponent={() => <View style={{height: 120}} />}
          />
        ) : (
          <DailyMenu
            namelength={30}
            weeklyMenu={weeklyMenu}
            year={year}
            month={month}
            date={date}
            day={day}
          />
        )}
        <View></View>
      </ScrollView>
    </View>
  );
};
export default Menu;
