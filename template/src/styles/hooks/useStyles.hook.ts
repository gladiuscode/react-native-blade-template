import {useContext, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {StylesProviderValue} from '../provider/styles.types';
import {StylesContext} from '../provider/styles.data';

export type StylesBuilder = (
  defaultStyles: StylesProviderValue,
) => ReturnType<typeof StyleSheet.create>;

export const useStyles = (builder: StylesBuilder) => {
  const defaultStyles = useContext<StylesProviderValue>(StylesContext);
  const styles = builder(defaultStyles);
  return useMemo(
    () => ({styles, onToggleChange: defaultStyles.onThemeChange}),
    [defaultStyles.onThemeChange, styles],
  );
};
