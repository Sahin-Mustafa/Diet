import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {marginBottom: 5},
  slider_title: {alignSelf: 'center', color: 'black', fontSize: 16},
  slider_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  value_container: {
    width: 40,
    height: 30,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#666666',
    borderRadius: 3,
  },
  value: {textAlign: 'center', color: 'white', fontSize: 16},
  slider: {flex: 1, marginLeft: 2, height: 40},
});
