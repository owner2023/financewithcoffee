import { Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../style/colors';
import fontStyle from '../../style/fontStyle';

const ConfirmButton = ({ title, onPress, buttonStyle }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        confirmButtonStyles.button,
        { backgroundColor: colors.mainColor },
        pressed && { backgroundColor: colors.mainDarkColor },
        buttonStyle,
      ]}
    >
      <Text style={confirmButtonStyles.title}>{title}</Text>
    </Pressable>
  );
};

ConfirmButton.defaultProps = {
  title: '완료',
};

ConfirmButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
};

const confirmButtonStyles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontStyle.normal,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default ConfirmButton;
