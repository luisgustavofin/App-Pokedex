import React from 'react';
import { Text, View } from 'react-native';
import { Styles, getColorFromType } from '../styles';
import { GaugeBar } from '../components';
import { Labels } from '../others';

export default class BaseStatsNav extends React.Component {
  render(props) {
    const getPrimaryColor = getColorFromType(this.props.data.types[0].type.name);
    return (
      <View style={Styles.statsContainer}>
        <Text style={[Styles.statsTitle, { color: getPrimaryColor }]}>{Labels.baseStats}</Text>

        <View style={Styles.statsRow}>
          <Text style={Styles.statsLeftText}>{Labels.HP}</Text>
          <Text style={Styles.statsRightText}>{this.props.data.stats[0].base_stat}</Text>
          <GaugeBar
            barColor={getPrimaryColor}
            width={this.props.data.stats[0].base_stat}
          />
        </View>

        <View style={Styles.statsRow}>
          <Text style={Styles.statsLeftText}>{Labels.attack}</Text>
          <Text style={Styles.statsRightText}>{this.props.data.stats[1].base_stat}</Text>
          <GaugeBar
            barColor={getPrimaryColor}
            width={this.props.data.stats[1].base_stat}
          />
        </View>

        <View style={Styles.statsRow}>
          <Text style={Styles.statsLeftText}>{Labels.defence}</Text>
          <Text style={Styles.statsRightText}>{this.props.data.stats[2].base_stat}</Text>
          <GaugeBar
            barColor={getPrimaryColor}
            width={this.props.data.stats[2].base_stat}
          />
        </View>

        <View style={Styles.statsRow}>
          <Text style={Styles.statsLeftText}>{Labels.spAttack}</Text>
          <Text style={Styles.statsRightText}>{this.props.data.stats[3].base_stat}</Text>
          <GaugeBar
            barColor={getPrimaryColor}
            width={this.props.data.stats[3].base_stat}
          />
        </View>

        <View style={Styles.statsRow}>
          <Text style={Styles.statsLeftText}>{Labels.spDefence}</Text>
          <Text style={Styles.statsRightText}>{this.props.data.stats[4].base_stat}</Text>
          <GaugeBar
            barColor={getPrimaryColor}
            width={this.props.data.stats[4].base_stat}
          />
        </View>

        <View style={Styles.statsRow}>
          <Text style={Styles.statsLeftText}>{Labels.speed}</Text>
          <Text style={Styles.statsRightText}>{this.props.data.stats[5].base_stat}</Text>
          <GaugeBar
            barColor={getPrimaryColor}
            width={this.props.data.stats[5].base_stat}
          />
        </View>

        <View style={[Styles.statsRow, { marginTop: 8, marginBottom: 8 }]}>
          <Text style={[Styles.statsLeftText, { fontSize: 16 }]}>{Labels.total}</Text>
          <Text style={[Styles.statsRightText, { fontWeight: 'bold', fontSize: 16 }]}>
            {this.props.data.stats[0].base_stat
                + this.props.data.stats[1].base_stat
                + this.props.data.stats[2].base_stat
                + this.props.data.stats[3].base_stat
                + this.props.data.stats[4].base_stat
                + this.props.data.stats[5].base_stat}
          </Text>
        </View>

        <Text style={Styles.statsDescription}>
          {Labels.statsDescription}
        </Text>
      </View>
    );
  }
}
