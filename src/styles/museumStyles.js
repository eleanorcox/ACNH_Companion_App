import {StyleSheet} from 'react-native';
import {ICON_PINK, BEIGE_LIGHT, BEIGE_DARK, BEIGE_MEDIUM} from 'assets/colours';
import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const cardWidth = 0.95 * windowWidth;

export default StyleSheet.create({
  background: {
    backgroundColor: ICON_PINK,
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
  },

  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },

  characteristicAnswer: {
    flex: 1,
    margin: 1,
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 10,
    height: 30,
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
