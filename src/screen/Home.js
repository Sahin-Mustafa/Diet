import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';

import PieCard from '../components/PieCard/PieCard';
import DailyInfo from '../components/DailyCard/DailyInfoCard';
import CustomHeader from '../components/CustomHeader/CustomHeader';
const Home = ({navigation, route}) => {
  const selectorData = useSelector(item => item.userData);
  const selectorData2 = useSelector(item => item.dailyData);

  const [userInfo, setUserInfo] = React.useState(selectorData);
  const [dailyData, setDailyData] = React.useState(selectorData2);
  const dayControl = dailyData.time.split('/');
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  React.useEffect(() => {
    setUserInfo(selectorData);
    setDailyData(selectorData2);
  }, [selectorData, selectorData2]);

  const setPieData = (remaining, consumed) => {
    return {
      dataRate: [
        {
          x:
            consumed > remaining
              ? ' '
              : `${Math.round(100 * (remaining - consumed)) / 100} g`,
          y: consumed > remaining ? 0 : remaining - consumed,
        },
        {x: `${consumed} g`, y: consumed},
      ],
      color: ['#ff0000', '#80ce48'],
    };
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#eeeeee'}}>
      <CustomHeader title={days[new Date().getDay()]} navigation={navigation} />
      <View style={{flex: 1, marginHorizontal: 10}}>
        {userInfo.daily_calori > 0 ? (
          <DailyInfo
            calories={Math.round(100 * (userInfo.daily_calori / 4)) / 100}
            fat={Math.round(100 * (userInfo.daily_fat / 4)) / 100}
            protein={Math.round(100 * (userInfo.daily_protein / 4)) / 100}
            carbohydrate={
              Math.round(100 * (userInfo.daily_carbohydrate / 4)) / 100
            }
          />
        ) : (
          <Text style={{flex: 1, alignItems: 'center'}}>
            You must enter your information on the profile page.
          </Text>
        )}
        {dailyData.protein > 0 && dayControl[0] === `${new Date().getDay()}` ? (
          <View>
            <PieCard
              data={setPieData(userInfo.daily_calori / 4, dailyData.calories)}
              header="Calories"
              title1="remaining"
              title2="consumed"
            />
            <PieCard
              data={setPieData(userInfo.daily_fat / 4, dailyData.fat)}
              header="   Fat"
              title1="remaining"
              title2="consumed"
            />
            <PieCard
              data={setPieData(userInfo.daily_protein / 4, dailyData.protein)}
              header="Protein"
              title1="remaining"
              title2="consumed"
            />
            <PieCard
              data={setPieData(
                userInfo.daily_carbohydrate / 4,
                dailyData.carbohydrate,
              )}
              header="Carbohydrate"
              title1="remaining"
              title2="consumed"
            />
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};
export default Home;
/*
  const a = {
    age: 24,
    daily_calori: 2519.91,
    daily_carbohydrate: 1757.31,
    daily_fat: 629.9775,
    daily_protein: 132.62,
    fat: 23.45,
    gender: 0,
    height: 171,
    hip: 89,
    name: 'Mustafa ŞAHİN',
    neck: 33,
    waist: 88,
    weight: 63,

    {"calories": 0, "carbohydrate": 0, "fat": 0, "protein": 0, "time": ""}

    
  };
   */
