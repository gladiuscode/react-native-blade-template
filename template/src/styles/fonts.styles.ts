import {StyleSheet} from 'react-native';
import {DefaultColors} from './hooks/useColors';

export type DefaultFonts = ReturnType<typeof getFontsBy>;

export const getFontsBy = (colors: DefaultColors) =>
  StyleSheet.create({
    headingOne: {
      fontSize: 21,
      color: colors.primaryText,
    },
  });
