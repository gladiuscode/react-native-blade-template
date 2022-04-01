import React, {useCallback} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {
  MainStackScreenProps,
  Screens,
} from '../../../navigation/navigation.types';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './detail.styles';

type Props = MainStackScreenProps<Screens.detail>;

export const Detail: React.FC<Props> = ({navigation}) => {

  // ** CALLBACKS ** //
  const onPress = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>Go to home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Detail;
