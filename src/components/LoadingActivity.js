import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Styles, Colors } from '../styles';

const LoadingActivity = () => (
  <View style={Styles.boxActivity}>
    <ActivityIndicator style={Styles.activityLoadingModal} size="large" color={Colors.red} />
  </View>
);

export { LoadingActivity };
