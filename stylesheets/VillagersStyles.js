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

  villager: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#eaeaea",
  },
});
