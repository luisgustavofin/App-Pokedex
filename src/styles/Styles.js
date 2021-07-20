import { StyleSheet } from 'react-native';
import { getWidth } from '../others';
import { Colors } from '.';

const screenWidth = getWidth();

const Styles = StyleSheet.create({
  touchSearchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '68%',
    height: '7.8%',
    backgroundColor: Colors.gray333,
    borderRadius: 18
  },
  textSearchButton: {
    fontSize: 19.5,
    color: Colors.white
  },
  boxLoadingModalActivity: {
    flex: 1,
    width: '100%'
  },
  box2LoadingModalActivity: {
    flexDirection: 'row'
  },
  activityLoadingModal: {
    flex: 1
  },
  containerErrorModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackOpacity
  },
  boxErrorModal: {
    width: '80%',
    height: '20%',
    borderRadius: 3,
    backgroundColor: Colors.white,
    flexDirection: 'column'
  },
  boxButtonErrorModal: {
    flex: 1,
    width: '100%'
  },
  textErrorModal: {
    fontSize: 23,
    margin: 3,
    color: Colors.red
  },
  touchErrorModal: {
    position: 'absolute',
    top: 2,
    right: 3
  },
  xErrorModal: {
    fontSize: 19,
    color: Colors.black
  },
  boxTextErrorModal: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texterrorErrorModal: {
    color: Colors.black,
    fontSize: 15
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingBottom: 5,
    borderBottomColor: Colors.whiteOpacity01,
    borderBottomWidth: StyleSheet.hairlineWidth,
    zIndex: 5
  },
  title: {
    fontFamily: 'Roboto700',
    fontSize: 45,
    color: Colors.white,
    fontWeight: 'bold'
  },
  inputWrapper: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.redOpacity,
    borderRadius: 50,
    paddingVertical: 8,
    paddingRight: 10,
    maxHeight: 57
  },
  searchInput: {
    fontSize: 16,
    color: Colors.white,
    flex: 1,
    fontWeight: '500',
  },
  listFooter: {
    marginTop: 20,
    marginBottom: 10
  },
  listHeader: {
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: Colors.backGroundHeader
  },
  pokeballHeader: {
    position: 'absolute',
    right: -25,
    top: -100,
    opacity: 0.2,
    width: 190,
    height: 190,
    zIndex: 1,
    transform: [{ rotate: '-14deg' }]
  },
  aboutRow: {
    flexDirection: 'row',
    marginBottom: 15
  },
  aboutDescription: {
    color: Colors.gray7474,
    fontSize: 12,
    marginBottom: 10
  },
  aboutTitle: {
    marginVertical: 20,
    marginHorizontal: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
  aboutLeftText: {
    color: Colors.black000,
    width: 120,
    fontSize: 12,
    fontWeight: 'bold'
  },
  aboutRightText: {
    color: Colors.gray7474
  },
  aboutContainer: {
    flex: 1,
    paddingTop: 30,
    paddingEnd: 40,
    paddingLeft: 40
  },
  statsContainer: {
    flex: 1,
    paddingTop: 30,
    paddingEnd: 40,
    paddingLeft: 40
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -8
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statsLeftText: {
    color: Colors.black000,
    fontSize: 12,
    minWidth: 90,
    fontWeight: 'bold'
  },
  statsRightText: {
    minWidth: 40,
    color: Colors.black
  },
  statsDescription: {
    color: Colors.gray7474,
    fontSize: 12,
    lineHeight: 14,
    marginTop: 15,
    marginBottom: 10
  },
  statsBar: {
    flex: 1,
    height: 5,
    borderRadius: 10
  },
  navContainer: {
    flex: 1,
    paddingTop: 33,
  },
  navMenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  navIndicator: {
    height: 3,
    marginBottom: -3,
  },
  navMenuButtom: {
    flex: 1,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navContent: {
    width: screenWidth
  },
  backButtonText: {
    color: Colors.white,
    fontSize: 35
  },
  backButtonTouch: {
    alignSelf: 'flex-start'
  },
  backButtonView: {
    marginLeft: 6
  },
  pokemonContainer: {
    flex: 1
  },
  pokemonBox: {
    marginLeft: 20,
    height: '24%',
    marginTop: 10,
  },
  pokemonIdText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  pokemonNameText: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10
  },
  pokemonImagePokeball: {
    width: 180,
    height: 180,
    opacity: 0.2,
    position: 'absolute',
    tintColor: Colors.white,
    right: -30,
    top: -165,
  },
  pokemonImagePokemon: {
    width: 180,
    height: 180,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    top: -130
  },
  pokemonBoxNavBar: {
    flex: 1,
    marginTop: 26,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  pokemonNavBar: {
    marginTop: 40
  },
  boxTypeCardText: {
    flexDirection: 'row'
  },
  viewTypeCardText: {
    padding: 4,
    marginLeft: 5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.whiteOpacity015
  },
  textTypeCardText: {
    color: Colors.white,
    textAlign: 'center'
  },
  boxItemList: {
    flex: 1,
    alignItems: 'center'
  },
  touchItemList: {
    marginTop: 9,
    height: 130,
    padding: 20,
    overflow: 'hidden',
    marginBottom: 15,
    borderRadius: 15,
    width: '98%'
  },
  idItemList: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.grayOpacity
  },
  nameItemList: {
    marginBottom: 5,
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold'
  },
  imagemItemList: {
    tintColor: Colors.white,
    opacity: 0.15,
    width: 150,
    height: 150,
    position: 'absolute',
    right: -15,
    bottom: -15
  },
  imagem2ItemList: {
    width: 115,
    height: 115,
    position: 'absolute',
    right: 5,
    bottom: 5
  },
  pokeballTestListComponent: {
    width: 200,
    height: 200
  },
  lupaTestListComponent: {
    width: 22,
    height: 22,
    marginLeft: 15,
    marginRight: 10
  },
  boxActivity: {
    marginTop: 18,
    marginBottom: 18
  }
});

export { Styles };
