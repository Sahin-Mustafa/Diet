import React from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';
import {Colors, RadioButton, List} from 'react-native-paper';
import {VictoryPie} from 'victory-native';
import {useDispatch} from 'react-redux';

import styles from './Profile.style';
import MyInput from '../../components/TextInput/TextInput';
import MySlider from '../../components/Slider/Slider';
import MyButton from '../../components/MyButton/MyButton';
import {
  calculateFatRate,
  dailyCalories,
  dailyFat,
} from '../../utils/calculateHealthData';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
const size = Dimensions.get('window');

const Profil = ({navigation}) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [neck, setNeck] = React.useState(0);
  const [waist, setWaist] = React.useState(0);
  const [hip, setHip] = React.useState(0);
  const [gender, setGender] = React.useState(-1);
  const [fat, setFat] = React.useState(0);

  const [dailyRoutine, setDailyRoutine] = React.useState(1);

  const [save, setSave] = React.useState(false);

  const [pieData, setPieData] = React.useState([]);
  const [userData, setUserData] = React.useState({});

  const SliderArr = [
    {
      label: 'Age',
      onValueChange: s => setAge(s),
      value: age,
      minimumValue: 15,
      maxValue: 70,
    },
    {
      label: 'Weight (kg)',
      onValueChange: s => setWeight(s),
      value: weight,
      minimumValue: 40,
      maxValue: 250,
    },
    {
      label: 'Height (cm)',
      onValueChange: s => setHeight(s),
      value: height,
      minimumValue: 100,
      maxValue: 230,
    },
    {
      label: 'Neck circumference (cm)',
      onValueChange: s => setNeck(s),
      value: neck,
      minimumValue: 10,
      maxValue: 80,
    },
    {
      label: 'Waist circumference (cm)',
      onValueChange: s => setWaist(s),
      value: waist,
      minimumValue: 20,
      maxValue: 200,
    },
    {
      label: 'Hip circumference (cm)',
      onValueChange: s => setHip(s),
      value: hip,
      minimumValue: 20,
      maxValue: 200,
    },
  ];
  const handlePress = () => setExpanded(!expanded);

  const saveButton = user_info => {
    if (gender < 0 || fat <= 0) {
      //uyarı bildir
      return setSave(false);
    } else {
      setSave(true);
      user_info.name = name;
      user_info.age = age;
      user_info.weight = weight;
      user_info.daily_calori = dailyCalories(
        gender,
        dailyRoutine,
        weight,
        height,
        age,
      );
      user_info.daily_protein =
        Math.round(100 * (2.75 * (((100 - fat) * weight) / 100))) / 100;
      user_info.daily_fat = dailyFat(user_info.daily_calori, age);
      user_info.daily_carbohydrate =
        Math.round(
          100 *
            (user_info.daily_calori -
              user_info.daily_protein -
              user_info.daily_fat),
        ) / 100;
      dispatch({
        type: 'USER_INFO',
        payload: {
          data: user_info,
        },
      });
    }
    console.log('save içindeyim: ', user_info);
  };

  React.useEffect(() => {
    const result = calculateFatRate(gender, waist, neck, height, hip);
    if (gender < 0 || result < 0) {
      //pop-up uyarı
      return setSave(false);
    } else {
      setFat(result);
      const weightRate = Math.round((100 - fat) * 100) / 100;
      setPieData({
        dataRate: [
          {x: `%${fat}`, y: fat},
          {x: `%${weightRate}`, y: weightRate},
        ],
        color: ['tomato', 'orange'],
      });
    }
    setUserData({
      name,
      age,
      weight,
      height,
      neck,
      waist,
      hip,
      gender,
      fat,
      daily_calori: 0,
      daily_protein: 0,
      daily_fat: 0,
      daily_carbohydrate: 0,
    });
  }, [age, weight, height, neck, waist, hip, gender, fat]);

  return (
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <CustomHeader title="Profil" navigation={navigation} drawerOpen={false} />

      <View style={styles.inner_container}>
        <MyInput
          value={name}
          placeholder="Name Surname"
          onChangeText={setName}
        />
        <Text style={styles.gender_header}>Gender</Text>
        <View style={styles.gender_container}>
          <View style={styles.gender_checked_container}>
            <Text style={styles.gender_checked_text}>Man</Text>
            <RadioButton
              value="first"
              status={gender === 0 ? 'checked' : 'unchecked'}
              onPress={() => setGender(0)}
            />
          </View>
          <View style={styles.gender_checked_container}>
            <Text style={styles.gender_checked_text}>Woman</Text>
            <RadioButton
              value="second"
              status={gender === 1 ? 'checked' : 'unchecked'}
              onPress={() => setGender(1)}
            />
          </View>
        </View>
        {SliderArr.map(item => {
          return (
            <MySlider
              title={item.label}
              value={item.value}
              minValue={item.minimumValue}
              maxValue={item.maxValue}
              onValueChange={item.onValueChange}
            />
          );
        })}
        <View>
          <List.Section>
            <List.Accordion
              title="Daily routine"
              style={{
                backgroundColor: 'rgba(200,200,0,0.2)',
                borderRadius: 5,
                padding: 0,
              }}
              expanded={expanded}
              onPress={handlePress}>
              <List.Item
                title="No exercising"
                onPress={() => {
                  setDailyRoutine(1.2);
                  handlePress();
                }}
              />
              {/* 1.2 */}
              <List.Item
                title="Light exercise"
                onPress={() => {
                  setDailyRoutine(1.375);
                  handlePress();
                }}
              />
              {/* 1.375 */}
              <List.Item
                title="Moderate exercise"
                onPress={() => {
                  setDailyRoutine(1.55);
                  handlePress();
                }}
              />
              {/* 1.55 */}
              <List.Item
                title="Moderate to heavy exercise"
                onPress={() => {
                  setDailyRoutine(1.72);
                  handlePress();
                }}
              />
              {/* 1.72 */}
              <List.Item
                title="Heavy exercise"
                onPress={() => {
                  setDailyRoutine(1.9);
                  handlePress();
                }}
              />
              {/* 1.9 */}
            </List.Accordion>
          </List.Section>
        </View>
        {save ? (
          <View style={styles.pie_chart_container}>
            <VictoryPie
              data={pieData.dataRate}
              colorScale={pieData.color}
              radius={size.width * 0.4 - 10}
              innerRadius={60}
              labelRadius={({innerRadius}) =>
                (size.width * 0.4 + innerRadius) / 2.7
              }
              style={{labels: {fill: Colors.black, fontSize: 16}}}
              width={size.width * 0.8}
              height={size.width * 0.8}
            />
            <View style={styles.pie_legend_container}>
              <View style={styles.pie_legend_label}>
                <Text>Fat</Text>
                <Text
                  style={{
                    ...styles.pie_legend_color,
                    backgroundColor: pieData.color[0],
                  }}>
                  {' '}
                </Text>
              </View>
              <View style={styles.pie_legend_label}>
                <Text>Weight</Text>
                <Text
                  style={{
                    ...styles.pie_legend_color,
                    backgroundColor: pieData.color[1],
                  }}>
                  {' '}
                </Text>
              </View>
            </View>
          </View>
        ) : null}
        <MyButton
          title={save ? 'Update' : 'Save'}
          onPress={() => saveButton(userData)}
        />
      </View>
    </ScrollView>
  );
};

export default Profil;
