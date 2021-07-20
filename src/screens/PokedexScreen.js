import React from 'react';
import { View, FlatList } from 'react-native';
import { HeaderList, ItemList, LoadingActivity, ErrorModal, StatusBarFunc } from '../components';
import { axiosGetPokemons } from '../service';
import { Labels } from '../others';

export default class PokedexScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: '',
      flatlistVisible: false,
      loadingActivityVisible: true,
      errorModalVisible: false,
      msgError: '',
      search: '',
      number: 1,
      fetching: false
    };
  }

  componentDidMount() {
    this.getList();
  }

  async onSubmitEditing() {
    if (this.state.search) {
      this.setState({ loadingActivityVisible: true });
      if (this.state.search.replace(/\s/g, '').length > 0) {
        try {
          const response = await axiosGetPokemons(this.state.search.toLowerCase());
          this.props.navigation.navigate('PokemonScreen', { data: response.data, pokemonId: response.data.id });
          this.setState({ loadingActivityVisible: false });
        }
        catch (error) {
          this.setState({ msgError: Labels.msgSearchError, loadingActivityVisible: false, errorModalVisible: true });
        }
      }
      else {
        this.setState({ msgError: Labels.msgVerify, loadingActivityVisible: false, errorModalVisible: true });
      }
    }
    else {
      this.setState({ loadingActivityVisible: false, msgError: Labels.msgFill, errorModalVisible: true });
    }
  }

  async getList() {
    if (!this.state.fetching) {
      try {
        this.setState({ fetching: true, loadingActivityVisible: false, flatlistVisible: true });
        for (let x = 1; x < 8; x++) {
          const response = await axiosGetPokemons(this.state.number);
          this.setState(prevState => ({ list: [...prevState.list, response.data], number: this.state.number + 1 }));
        }
        this.setState({ fetching: false });
      }
      catch (error) {
        this.setState({ msgError: Labels.msgError, errorModalVisible: true, fetching: false });
      }
    }
  }

  goToPokemonScreen(item) {
    this.props.navigation.navigate('PokemonScreen', { data: item, pokemonId: item.id });
  }

  async loadMore() {
    await this.getList();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarFunc />

        <HeaderList
          onChangeText={(txt) => this.setState({ search: txt })}
          value={this.state.search}
          onSubmitEditing={() => this.onSubmitEditing()}
        />

        {this.state.loadingActivityVisible
          && <LoadingActivity />}

        {this.state.flatlistVisible
          && (
            <FlatList
              data={this.state.list}
              renderItem={({ item }) => <ItemList data={item} onPress={() => this.goToPokemonScreen(item)} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              onEndReached={() => this.loadMore()}
              onEndReachedThreshold={0.3}
            />
          )}

        {this.state.errorModalVisible
          && <ErrorModal visible={this.state.errorModalVisible} onPress={() => this.setState({ errorModalVisible: false })} msgError={this.state.msgError} />}

      </View>
    );
  }
}
