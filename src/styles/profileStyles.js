import {StyleSheet} from 'react-native';
import {
  BEIGE_MEDIUM,
  BEIGE_LIGHT,
  ICON_GREEN,
  BEIGE_DARK,
} from 'assets/colours';
import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    backgroundColor: ICON_GREEN,
  },

  scrollView: {
    marginHorizontal: 20,
  },

  scrollViewContent: {
    alignItems: 'center',
  },

  card: {
    backgroundColor: BEIGE_LIGHT,
    marginVertical: 7,
    padding: 9,
    borderRadius: 20,
    alignItems: 'center',
  },

  input: {
    width: 200,
    height: 60,
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 15,
    marginTop: 5,
    textAlign: 'center',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    flex: 1,
  },

  leftContainer: {
    flex: 1,
    backgroundColor: BEIGE_DARK,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightContainer: {
    flex: 2,
    flexDirection: 'row',
  },

  pickerImage: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },

  switchCodeSW: {
    textAlignVertical: 'center',
    textAlign: 'right',
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },

  rightInput: {
    flex: 1,
    height: 50,
    width: 130,
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 15,
  },

  image: {
    width: 128,
    height: 128,
  },

  title: {
    textAlign: 'center',
  },

  residentsContainer: {
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  residentIcon: {
    // flexBasis: '20%',
    width: 70,
    height: 70,
  },
});
