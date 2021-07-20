import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '../styles';

const StatusBarFunc = () => (
  <StatusBar barStyle="light-content" backgroundColor={Colors.statusBarColor} />
);

export { StatusBarFunc };
