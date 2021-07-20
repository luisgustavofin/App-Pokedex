import { Colors } from '.';

const getColorFromType = (type) => {
  switch (type) {
    case 'bug':
      return Colors.bug;
    case 'dark':
      return Colors.dark;
    case 'dragon':
      return Colors.dragon;
    case 'electric':
      return Colors.electric;
    case 'fairy':
      return Colors.fairy;
    case 'fighting':
      return Colors.fighting;
    case 'fire':
      return Colors.fire;
    case 'flying':
      return Colors.flying;
    case 'ghost':
      return Colors.ghost;
    case 'grass':
      return Colors.grass;
    case 'ground':
      return Colors.ground;
    case 'ice':
      return Colors.ice;
    case 'normal':
      return Colors.normal;
    case 'poison':
      return Colors.poison;
    case 'psychic':
      return Colors.psychic;
    case 'rock':
      return Colors.rock;
    case 'steel':
      return Colors.steel;
    case 'water':
      return Colors.water;
    default:
      return Colors.black;
  }
};

export { getColorFromType };
