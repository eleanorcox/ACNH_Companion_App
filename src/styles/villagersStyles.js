import {StyleSheet} from 'react-native';
import {BEIGE_LIGHT, BEIGE_DARK, BEIGE_MEDIUM, ICON_BLUE} from 'assets/colours';
import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const windowHeight = dimensions.height;
const villagerCardWidth = 0.9 * windowWidth;
const modalWidth = 0.7 * windowWidth;
const modalHeight = 0.45 * windowHeight;

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
    backgroundColor: ICON_BLUE,
    marginTop: 5,
    borderRadius: 10,
  },

  villager: {
    width: villagerCardWidth,
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

  modalContainer: {
    // justifyContent: 'center',
    // flexDirection: 'column',
    alignItems: 'center',
    margin: '50%',
    // flex: 0,
  },

  modalContent: {
    width: modalWidth,
    height: modalHeight,
    // margin: 7,
    padding: 10,
    borderColor: BEIGE_DARK,
    borderWidth: 2,
    backgroundColor: BEIGE_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  poster: {
    width: 160,
    height: 160,
  },
});
