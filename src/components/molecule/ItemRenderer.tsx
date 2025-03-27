import {Film} from '../../models/Film.ts';
import {InfoCard} from './InfoCard.tsx';
import {View, StyleSheet} from 'react-native';
import {People} from '../../models/People.ts';

interface ItemRendererProps {
  item: Film | People;
  onPress?: (item: People) => void;
}

export const ItemRenderer: React.FC<ItemRendererProps> = ({item, onPress}) => {
  return (
    <View style={styles.itemContainer}>
      {'id_episodio' in item ? (
        <InfoCard isLarge={false} film={item} disable={true} />
      ) : (
        <InfoCard
          isLarge={false}
          people={item}
          disable={false}
          onPressItem={onPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 8,
  },
});
