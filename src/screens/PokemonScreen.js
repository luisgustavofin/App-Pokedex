import React from 'react';
import { View, Text, Image } from 'react-native';
import { Navbar, StatusBarFunc, BackButton, TypeCardText } from '../components';
import { Styles, getColorFromType } from '../styles';
import { Capitalize, FormaterId, Labels } from '../others';
import { AboutNav, BaseStatsNav } from '.';
import { axiosGetPokemonsSpecie } from '../service';

export default class PokemonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam('data'),
      pokemonId: this.props.navigation.getParam('pokemonId'),
      description: Labels.loading
    };
  }

  componentDidMount() {
    this.getDescription(this.state.pokemonId);
  }

  async getDescription(pokemonId) {
    try {
      const response = await axiosGetPokemonsSpecie(pokemonId);
      this.setState({ description: response.data.flavor_text_entries[7].flavor_text });
    }
    catch (error) {
      this.setState({ description: Labels.noDescription });
    }
  }

  render() {
    return (
      <View style={[Styles.pokemonContainer, { backgroundColor: getColorFromType(this.state.data.types[0].type.name) }]}>

        <StatusBarFunc />

        <BackButton onPress={() => this.props.navigation.goBack()} />

        <View style={Styles.pokemonBox}>
          <Text style={Styles.pokemonIdText}>{FormaterId(this.state.data.id)}</Text>
          <Text style={Styles.pokemonNameText}>{Capitalize(this.state.data.name)}</Text>

          <View style={Styles.boxTypeCardText}>
            {this.state.data.types.map((type, key) => (
              <TypeCardText key={key} type={type} />
            ))}
          </View>

        </View>

        <View style={Styles.pokemonBoxNavBar}>
          <Image style={Styles.pokemonImagePokeball} source={require('../images/pokeball.png')} />
          <Image style={Styles.pokemonImagePokemon} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.state.data.id}.png` }} />

          <Navbar
            primaryColor={this.state.data.types[0].type.name}
            tabs={[{
              name: Labels.About,
              component:
  <AboutNav data={this.state.data} description={this.state.description} />
            }, {
              name: Labels.Stats,
              component:
  <BaseStatsNav data={this.state.data} />
            },
            ]}
            style={Styles.pokemonNavBar}
            indicatorColor={getColorFromType(this.state.data.types[0].type.name)}
          />
        </View>

      </View>
    );
  }
}
