import {StyleSheet, View} from 'react-native';
import {InfoCard} from './InfoCard.tsx';
import {Planet} from '../../models/Planet.ts';

export const ItemRendererPlanets: React.FC<{item: Planet}> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <InfoCard isLarge={true} planet={item} disable={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 8,
  },
});
