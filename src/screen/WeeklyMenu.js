import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Days from '../components/Days/Days';
import DailyMenu from '../components/DailyMenu/DailyMenu';
import CustomHeader from '../components/CustomHeader/CustomHeader';
const WeeklyMenu = ({navigation}) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const selectorData = useSelector(item => item.weeklyMenu);
  const [weeklyMenu, setWeeklyMenu] = React.useState(selectorData);
  const [selectedDaySrting, setSelectedDaySrting] = React.useState(0);

  React.useEffect(() => {
    setWeeklyMenu(selectorData);
  }, [selectorData]);

  const renderItem = ({item}) => (
    <Days
      day={item}
      handleSelectedDayString={() => setSelectedDaySrting(item)}
      dayString={selectedDaySrting}
    />
  );
  //days.indexOf(selectedDaySrting)
  return (
    <View sytle={{flex: 1, alignItems: 'center'}}>
      <CustomHeader
        title="Weekly Menu"
        navigation={navigation}
        drawerOpen={false}
      />
      <FlatList
        data={days}
        keyExtractor={(_, index) => {
          index.toString();
        }}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      {selectedDaySrting ? (
        <DailyMenu
          weeklyMenu={weeklyMenu}
          day={days.indexOf(selectedDaySrting)}
          buttonView={false}
          namelength={50}
        />
      ) : null}
    </View>
  );
};
export default WeeklyMenu;
