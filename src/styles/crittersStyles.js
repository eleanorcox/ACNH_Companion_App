import {StyleSheet} from 'react-native';
import {
  ICON_YELLOW,
  BEIGE_LIGHT,
  BEIGE_MEDIUM,
  BEIGE_DARK,
  ICON_YELLOW_DARK,
  HEADER_TAB_YELLOW_DARK,
  GRAY_DARKER,
  WHITE,
  GRAY_DARK,
  HEADER_YELLOW_DARK,
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
const cardWidth = 0.9 * windowWidth;

export default StyleSheet.create({
  tabs: {
    backgroundColor: BEIGE_LIGHT,
  },

  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ICON_YELLOW_DARK,
  },

  row: {
    flexDirection: 'row',
  },

  controlButton: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: HEADER_YELLOW_DARK,
    marginVertical: 4,
    borderRadius: 10,
  },

  critter: {
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

  leftContainer: {
    justifyContent: 'center',
    flex: 1,
  },

  rightContainer: {
    flex: 1.7,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },

  image: {
    width: 128,
    height: 128,
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 100,
  },

  characteristic: {
    flex: 1,
    backgroundColor: BEIGE_DARK,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    paddingVertical: 2,
  },

  characteristicAnswer: {
    paddingVertical: 2,
    flex: 1,
    margin: 1,
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    alignItems: 'center',
    flex: 1,
  },
});
