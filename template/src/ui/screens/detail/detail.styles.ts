import {StyleSheet} from 'react-native';
import {StylesBuilder} from '../../../styles/hooks/useStyles.hook';

const styles: StylesBuilder = ({colors, fonts}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: fonts.headingOne,
  });

export default styles;
