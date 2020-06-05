import {StyleSheet} from 'react-native';
import {BEIGE_LIGHT, ICON_BLUE_LIGHT, BEIGE_DARK, BEIGE_MEDIUM} from 'assets/colours';
import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const villagerCardWidth = 0.9 * windowWidth;
const iconWidth = 0.3 * windowWidth;

export default StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ICON_BLUE_LIGHT,
  },

  row: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // flexWrap: 'wrap',
    // backgroundColor: '#000',
  },

  villager: {
    width: villagerCardWidth,
    alignItems: 'center',
    marginVertical: 7,
    padding: 10,
    borderRadius: 20,
    backgroundColor: BEIGE_LIGHT,
  },

  name: {},

  leftContainer: {
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
    // width: iconWidth,
    alignItems: 'center',
    flex: 1,
    // backgroundColor: '#00d',
  },

  itemModalContent: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50%',
    flex: 0,
  },

  itemView: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
  },
});
