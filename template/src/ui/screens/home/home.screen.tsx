import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  MainStackScreenProps,
  Screens,
} from '../../../navigation/navigation.types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyles} from '../../../styles/hooks/useStyles.hook';
import homeStyles from './home.styles';

type Props = MainStackScreenProps<Screens.home>;

export const Home: React.FC<Props> = ({navigation}) => {
  const {styles} = useStyles(homeStyles);

  // ** CALLBACKS ** //
  const onPress = useCallback(
    () => navigation.navigate(Screens.detail),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, styles.marginBottom]}>Blade Template</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>Go to detail</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
