import React from 'react';
import { View, Text } from 'react-native';
import { FormaterType } from '../others';
import { Styles } from '../styles';

const TypeCardText = ({ type }) => (
  <View style={Styles.viewTypeCardText}>
    <Text style={Styles.textTypeCardText}> {FormaterType(type)} </Text>
  </View>
);

export { TypeCardText };
