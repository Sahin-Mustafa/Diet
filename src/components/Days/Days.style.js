import {StyleSheet} from 'react-native';
const base_style = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 5,
    marginRight: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#ff7f00',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  //1daef7
});
export default {
  primary: StyleSheet.create({
    ...base_style,
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#1daef7',
    },
  }),
};
