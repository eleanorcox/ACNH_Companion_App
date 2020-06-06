import {StyleSheet} from 'react-native';
import {
  BEIGE_LIGHT,
  BEIGE_DARK,
  BEIGE_MEDIUM,
  GRAY_DARKER,
  WHITE,
  GRAY_DARK,
  ICON_ORANGE,
  ICON_ORANGE_LIGHT,
} from 'assets/colours';
import {Dimensions} from 'react-native';
import {
  FONT_FAMILY,
  FONT_SIZE_18,
  FONT_WEIGHT_BOLD,
  FONT_SIZE_16,
} from 'assets/fonts';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const windowHeight = dimensions.height;
const cardWidth = 0.9 * windowWidth;

export default StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
  },

  controlButton: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ICON_ORANGE,
    marginVertical: 5,
    borderRadius: 10,
  },

  controlsContainer: {
    height: windowHeight,
    backgroundColor: ICON_ORANGE_LIGHT,
    alignItems: 'center',
  },

  alignCenter: {
    alignItems: 'center',
  },

  recipe: {
    width: cardWidth,
    alignItems: 'center',
    marginVertical: 7,
    padding: 10,
    borderRadius: 20,
    backgroundColor: BEIGE_LIGHT,
  },

  name: {
    marginBottom: 4,
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_18,
    fontWeight: FONT_WEIGHT_BOLD,
    color: GRAY_DARKER,
  },

  textWhite: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_16,
    fontWeight: FONT_WEIGHT_BOLD,
    color: WHITE,
  },

  textDarkGrey: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_16,
    fontWeight: FONT_WEIGHT_BOLD,
    color: GRAY_DARK,
    textAlign: 'center',
  },

  characteristic: {
    flex: 1,
    backgroundColor: BEIGE_DARK,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    padding: 5,
  },

  characteristicAnswer: {
    flex: 1,
    margin: 1,
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    alignItems: 'center',
    flex: 1,
  },
});
