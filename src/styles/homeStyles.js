import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {FONT_FAMILY, FONT_WEIGHT_BOLD, FONT_SIZE_16} from 'assets/fonts';
import {GRAY_DARKER} from 'assets/colours';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const windowHeight = dimensions.height;
const iconSize = 0.29 * windowWidth;
const iconsMargin = 0.07 * windowHeight;

export default StyleSheet.create({
  iconsContainer: {
    marginVertical: iconsMargin,
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  iconContainer: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  icon: {
    width: iconSize,
    height: iconSize,
  },

  text: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: FONT_SIZE_16,
    color: GRAY_DARKER,
  },
});
