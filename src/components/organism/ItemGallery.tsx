import {Film} from '../../models/Film.ts';
import {FlashList} from '@shopify/flash-list';
import {ItemRenderer} from '../molecule/ItemRenderer.tsx';
import {Planet} from '../../models/Planet.ts';
import {ItemRendererPlanets} from '../molecule/itemRendererPlanets.tsx';
import {Dimensions} from 'react-native';
import {People} from '../../models/People.ts';
import {EmptyState} from '../molecule/EmptyState.tsx';

interface ItemGalleryProps<T> {
  items: T[];
  onItemPress?: (item: People) => void;
}

const {width, height} = Dimensions.get('window');

export const ItemGallery = <T extends Film | Planet | People>({
  items,
  onItemPress,
}: ItemGalleryProps<T>) => {
  const renderActions = {
    film: (item: Film) => <ItemRenderer item={item} />,
    planet: (item: Planet) => <ItemRendererPlanets item={item} />,
    people: (item: People) => (
      <ItemRenderer item={item} onPress={onItemPress} />
    ),
  };

  const renderItem = (item: Film | Planet | People) => {
    if ('id_episodio' in item) {
      return renderActions.film(item as Film);
    } else if ('diametro' in item) {
      return renderActions.planet(item as Planet);
    } else {
      return renderActions.people(item as People);
    }
  };

  return !items || items.length === 0 ? (
    <EmptyState />
  ) : (
    <FlashList
      data={items}
      numColumns={1}
      scrollEnabled={false}
      renderItem={({item}) => renderItem(item)}
      estimatedListSize={{width: width * 0.9, height: height * 0.3}}
      estimatedItemSize={height * 0.3}
    />
  );
};
