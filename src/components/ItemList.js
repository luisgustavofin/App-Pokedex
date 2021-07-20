import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { TypeCardText } from '.';
import { Styles, getColorFromType } from '../styles';
import { Capitalize, FormaterId, Labels } from '../others';

const ItemList = ({ data, onPress }) => (
  <View style={Styles.boxItemList}>
    <TouchableOpacity onPress={onPress} style={[Styles.touchItemList, { backgroundColor: getColorFromType(data.types[0].type.name) }]}>
      <Text style={Styles.idItemList}>{FormaterId(data.id)}</Text>
      <Text style={Styles.nameItemList}>{Capitalize(data.name)}</Text>
      <Image
        style={Styles.imagemItemList}
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
        }}
        defaultSource={require('../images/pokeball.png')}
      />
      <Image
        style={Styles.imagem2ItemList}
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
        }}
        defaultSource={require('../images/pokeball.png')}
      />
      <View style={Styles.boxTypeCardText}>
        {data.types.map((type, key) => (
          <TypeCardText key={key} type={type} />
        ))}
      </View>
    </TouchableOpacity>
  </View>
);

const HeaderList = ({ onChangeText, value, onSubmitEditing }) => (
  <View style={Styles.listHeader}>
    <>
      <View style={Styles.titleWrapper}>
        <Text style={Styles.title}>{Labels.pokedex}</Text>
      </View>
      <View style={Styles.pokeballHeader}>
        <Image
          source={require('../images/pokeball.png')}
          style={Styles.pokeballTestListComponent}
        />
      </View>
      <View style={Styles.inputWrapper}>
        <TouchableOpacity onPress={onSubmitEditing}>
          <Image
            source={require('../images/lupa-icon.png')}
            style={Styles.lupaTestListComponent}
          />
        </TouchableOpacity>
        <TextInput
          style={Styles.searchInput}
          autoCompleteType="off"
          placeholder="Search a pokémon"
          value={value}
          onChangeText={onChangeText}
          returnKeyType="search"
          placeholderTextColor="#ffffff"
          onSubmitEditing={onSubmitEditing}
          clearButtonMode="while-editing"
          keyboardAppearance="default"
          numberOfLines={1}
          autoCorrect={false}
          maxLength={30}
        />
      </View>
    </>
  </View>
);

export { ItemList, HeaderList };
