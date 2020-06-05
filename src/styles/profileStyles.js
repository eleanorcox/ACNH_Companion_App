import {StyleSheet} from 'react-native';
import {
  BEIGE_MEDIUM,
  BEIGE_LIGHT,
  ICON_GREEN,
  BEIGE_DARK,
} from 'assets/colours';
import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;

export default StyleSheet.create({
  // GENERAL
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

  title: {
    textAlign: 'center',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    flex: 1,
  },

  //   PASSPORT
  input: {
    width: 200,
    height: 60,
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 15,
    marginTop: 5,
    textAlign: 'center',
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

  //   RESIDENTS
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

  birthdayRowContainer: {
    flexDirection: 'row',
    marginTop: 5,
    width: windowWidth / 1.3,
  },

  name: {
    flex: 1,
    height: 30,
    backgroundColor: BEIGE_DARK,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },

  birthday: {
    flex: 1,
    height: 30,
    backgroundColor: BEIGE_MEDIUM,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //   PROGRESS
  progressLeft: {
    flex: 1,
    backgroundColor: BEIGE_DARK,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },

  progressMid: {
    flex: 1,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BEIGE_MEDIUM,
  },

  //   progressRight: {
  //     flex: 1,
  //     backgroundColor: BEIGE_MEDIUM,
  //     borderRadius: 10,
  //     height: 40,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
});
