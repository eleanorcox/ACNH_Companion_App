import {StyleSheet} from 'react-native';
import {PHONE_BACKGROUND} from 'assets/colours';
import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const windowHeight = dimensions.height;
const iconSize = 0.29 * windowWidth;
const iconsMargin = 0.07 * windowHeight;

export default StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PHONE_BACKGROUND,
  },

  scrollView: {
    flex: 1,
  },

  image: {
    width: 128,
    height: 128,
  },

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
});
