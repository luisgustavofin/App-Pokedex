import { createStackNavigator } from 'react-navigation-stack';
import { PokedexScreen, PokemonScreen } from '../screens';

const MainNavigator = createStackNavigator({
  PokedexScreen: {
    screen: PokedexScreen,
  },
  PokemonScreen: {
    screen: PokemonScreen,
  }
},
{
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default MainNavigator;
