import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },

  image: {
    width: 128,
    height: 128,
  },

  recipe: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },

  searchContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
  },

  search: {
    width: '100%',
  },
});
