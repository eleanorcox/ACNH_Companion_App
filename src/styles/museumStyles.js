import {StyleSheet} from 'react-native';
import {
  ICON_PINK,
  BEIGE_LIGHT,
  BEIGE_DARK,
  BEIGE_MEDIUM,
  GRAY_DARKER,
  WHITE,
  GRAY_DARK,
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
const cardWidth = 0.95 * windowWidth;

export default StyleSheet.create({
  background: {
    backgroundColor: BEIGE_LIGHT,
  },

  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ICON_PINK,
  },

  row: {
    flexDirection: 'row',
  },

  card: {
    width: cardWidth,
    alignItems: 'center',
    marginVertical: 3,
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
    textAlign: 'center',
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
    alignItems: 'center',
    flex: 1.2,
  },

  rightContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },

  image: {
    width: 128,
    height: 128,
  },

  characteristic: {
    flex: 1,
    backgroundColor: BEIGE_DARK,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    padding: 2,
  },

  characteristicAnswer: {
    flex: 1,
    margin: 1,
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 10,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  characteristicArt: {
    flex: 1,
    backgroundColor: BEIGE_DARK,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    paddingVertical: 1,
  },

  characteristicAnswerArt: {
    flex: 1.5,
    padding: 2,
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

  searchContainer: {
    width: '100%',
    backgroundColor: BEIGE_LIGHT,
    borderRadius: 20,
  },

  searchInput: {
    backgroundColor: BEIGE_LIGHT,
  },

  search: {
    width: '100%',
  },
});
