import React from 'react';
import { View } from 'react-native';
import { Styles, Colors } from '../styles';

const GaugeBar = ({ barColor, width }) => (
  <View style={[Styles.statsBar, { backgroundColor: Colors.iceGaugeBar }]}>
    <View style={[Styles.statsBar, { width: width / 1.7, backgroundColor: barColor }]} />
  </View>
);

export { GaugeBar };
