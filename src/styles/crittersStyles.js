import {StyleSheet} from 'react-native';
import {
  ICON_YELLOW,
  BEIGE_LIGHT,
  BEIGE_MEDIUM,
  BEIGE_DARK,
} from 'assets/colours';
import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const cardWidth = 0.9 * windowWidth;

export default StyleSheet.create({
  view: {
    flex: 1,
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
    backgroundColor: ICON_YELLOW,
    marginTop: 5,
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

  icon: {
    alignItems: 'center',
    flex: 1,
  },
});
