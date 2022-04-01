import {useContext, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {StylesProviderValue} from '../provider/styles.types';
import {StylesContext} from '../provider/styles.data';

type Builder = (
  defaultStyles: StylesProviderValue,
) => ReturnType<typeof StyleSheet.create>;

export const useStyles = (builder: Builder) => {
  const defaultStyles = useContext<StylesProviderValue>(StylesContext);
  const styles = builder(defaultStyles);
  return useMemo(
    () => ({styles, onToggleTheme: defaultStyles.onThemeChange}),
    [defaultStyles.onThemeChange, styles],
  );
};
