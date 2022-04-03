import {StyleSheet} from 'react-native';
import {StylesProviderValue} from '../../../styles/provider/styles.types';

const styles = ({colors, fonts}: StylesProviderValue) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: fonts.headingOne,
    marginBottom: {
      marginBottom: 8,
    },
    logo: {
      width: 80,
      resizeMode: 'contain',
    },
  });

export default styles;
