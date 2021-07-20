import axios from 'axios';
import { Labels } from '../others';

const api = axios.create({
  baseURL: Labels.baseURL,
});

const axiosGetPokemons = async (idPokemon) => {
  const pokemons = await api.get(`/pokemon/${idPokemon}`);
  return pokemons;
};

const axiosGetListPokemons = async (offset) => {
  const pokemons = await api.get(`/pokemon?offset=${offset}&limit=15`);
  return pokemons;
};

const axiosGetPokemonsSpecie = async (idPokemon) => {
  const pokemons = await api.get(`/pokemon-species/${idPokemon}`);
  return pokemons;
};

export { axiosGetPokemons, axiosGetListPokemons, axiosGetPokemonsSpecie };
