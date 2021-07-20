import React from 'react';
import { Text, View } from 'react-native';
import { Labels, Capitalize, FormaterDescription } from '../others';
import { Styles, getColorFromType } from '../styles';

export default class AboutNav extends React.Component {
  render(props) {
    const getPrimaryColor = getColorFromType(this.props.data.types[0].type.name);
    return (
      <View style={Styles.aboutContainer}>
        <Text style={Styles.aboutDescription}>
          {FormaterDescription(this.props.description)}
        </Text>
        <Text style={[Styles.aboutTitle, { color: getPrimaryColor, marginTop: 5 }]}>
          {Labels.pokedexData}
        </Text>
        <View style={Styles.aboutRow}>
          <Text style={Styles.aboutLeftText}>{Labels.baseExp}</Text>
          <Text style={Styles.aboutRightText}>{this.props.data.base_experience}</Text>
        </View>
        <View style={Styles.aboutRow}>
          <Text style={Styles.aboutLeftText}>{Labels.height}</Text>
          <Text style={Styles.aboutRightText}>
            {this.props.data.height / 10}
            m
          </Text>
        </View>
        <View style={[Styles.aboutRow, { marginBottom: 0 }]}>

          <Text style={Styles.aboutLeftText}>{Labels.weight}</Text>
          <Text style={Styles.aboutRightText}>
            {this.props.data.weight / 10}
            Kg
          </Text>
        </View>
        <Text style={[Styles.aboutTitle, { color: getPrimaryColor, marginTop: 23 }]}>
          {Labels.abilities}
        </Text>
        <View style={Styles.aboutRow}>
          <Text style={Styles.aboutLeftText}>{Labels.abilityMain}</Text>
          <Text style={Styles.aboutRightText}>{Capitalize(this.props.data.abilities[0].ability.name)}</Text>
        </View>
      </View>
    );
  }
}
