import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {flex: 1, paddingVertical: 5},
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image_container: {
    justifyContent: 'center',
    minWidth: 90,
  },
  image: {
    height: 100,
    resizeMode: 'contain',
    margin: 2,
  },
  food_detail_container: {flex: 1, padding: 5},
  food_name: {color: 'black', fontSize: 15},
  nutrients_container: {
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  calori_protein_container: {flex: 1},
  calori_container: {flexDirection: 'row'},
  nutrients_text: {flex: 1},
  nutrients_value: {color: 'black', paddingHorizontal: 1},
  fat_crbhydrt_container: {flex: 1},

  repast_button_container: {flex: 1, flexDirection: 'row'},
  inner_repast_button_container: {flex: 1, paddingRight: 5},
  button: {backgroundColor: '#6ac5fe', borderRadius: 5, marginVertical: 5},
  button_text: {textAlign: 'center', color: 'black'},
});
