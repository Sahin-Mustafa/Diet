import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {marginVertical: 10, borderRadius: 40, backgroundColor: 'white'},
  pie_chart_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pie_legend_container: {
    marginRight: 10,
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
