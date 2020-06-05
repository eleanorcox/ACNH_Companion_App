import {StyleSheet} from 'react-native';
import {BEIGE_LIGHT, GREEN_MEDIUM} from 'assets/colours';

export default StyleSheet.create({
  headerBackground: {
    backgroundColor: GREEN_MEDIUM,
  },

  screenBackground: {
    backgroundColor: BEIGE_LIGHT,
  },

  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  scrollView: {
    flex: 1,
  },

  image: {
    width: 128,
    height: 128,
  },
});
