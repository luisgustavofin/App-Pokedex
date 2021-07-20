import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Labels } from '../others';
import { Styles } from '../styles';

const SearchButton = ({ onPress }) => (
  <TouchableOpacity testID="searchButton" onPress={onPress} style={Styles.touchSearchButton}>
    <Text style={Styles.textSearchButton}>{Labels.search}</Text>
  </TouchableOpacity>
);

const BackButton = ({ onPress }) => (
  <View style={Styles.backButtonView}>
    <TouchableOpacity onPress={onPress} style={Styles.backButtonTouch}>
      <Text style={Styles.backButtonText}>{Labels.arrow}</Text>
    </TouchableOpacity>
  </View>
);

export { SearchButton, BackButton };
