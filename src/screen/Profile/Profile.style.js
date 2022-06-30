import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#60ba62',
    backgroundColor: 'white',
  },
  header_container: {backgroundColor: 'red'},
  inner_container: {margin: 10},
  gender_header: {textAlign: 'center', color: 'black', fontSize: 17},
  gender_container: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  gender_checked_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gender_checked_text: {color: 'black', fontSize: 15},
  pie_chart_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pie_legend_container: {
    marginRight: 8,
    justifyContent: 'center',
  },
  pie_legend_label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pie_legend_color: {
    marginLeft: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
