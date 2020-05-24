import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: 128,
    height: 128,
  },

  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },

  buttonUnpressed: {
    // alignSelf: 'center',
    borderColor: '#000066',
    backgroundColor: 'blue',
  },

  buttonPressed: {
    // alignSelf: 'center',
    borderColor: '#000066',
    backgroundColor: 'pink',
  },

  recipe: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },

  listControls: {
    width: '100%',
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
