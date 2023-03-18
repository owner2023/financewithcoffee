import { StyleSheet } from 'react-native';
import { colors } from './colors';

const fontSizes = {
  normalText: 15,
  normalButton: 16,
};

const fontWeights = {
  normalText: 500,
  normalButton: 600,

  boldText: 700,
  boldButton: 800,
};
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: fontSizes.normalText,
    fontWeight: fontWeights.normalText,
    color: colors.darkWhite,
    padding: 10,
  },
});
