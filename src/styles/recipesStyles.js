import {StyleSheet} from 'react-native';
import {
  ICON_ORANGE_LIGHT,
  BEIGE_LIGHT,
  BEIGE_DARK,
  BEIGE_MEDIUM,
} from 'assets/colours';
import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
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
    backgroundColor: ICON_ORANGE_LIGHT,
    marginTop: 5,
    borderRadius: 10,
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
