import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {VictoryPie} from 'victory-native';
import {Colors} from 'react-native-paper';

import styles from './PieCard.style';

const size = Dimensions.get('window');
const PieCard = ({data, header, title1, title2}) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', color: 'black', fontSize: 20}}>
        {header}
      </Text>
      <View style={styles.pie_chart_container}>
        <View
          style={{
            flex: 1,
            marginLeft: 5,
          }}>
          <VictoryPie
            data={data.dataRate}
            colorScale={data.color}
            radius={size.width * 0.4 - 50}
            innerRadius={0}
            labelRadius={({innerRadius}) =>
              (size.width * 0.4 + innerRadius) / 5
            }
            style={{labels: {fill: Colors.black, fontSize: 18}}}
            width={size.width * 0.6}
            height={size.width * 0.6}
          />
        </View>
        <View style={styles.pie_legend_container}>
          <View style={styles.pie_legend_label}>
            <Text>{title1}</Text>
            <Text
              style={{
                ...styles.pie_legend_color,
                backgroundColor: data.color[0],
              }}>
              {' '}
            </Text>
          </View>
          <View style={styles.pie_legend_label}>
            <Text>{title2}</Text>
            <Text
              style={{
                ...styles.pie_legend_color,
                backgroundColor: data.color[1],
              }}>
              {' '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PieCard;
