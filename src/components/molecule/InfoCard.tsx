import {StyleSheet, TouchableOpacity, useColorScheme, View} from 'react-native';
import {PlanetsSection} from '../organism/PlanetsSection.tsx';
import {Planet} from '../../models/Planet.ts';
import {Film} from '../../models/Film.ts';
import {FilmSection} from '../organism/FilmSection.tsx';
import {People} from '../../models/People.ts';
import {PeopleSection} from '../organism/PeopleSection.tsx';

interface InfoCardProps {
  film?: Film;
  isLarge?: boolean;
  planet?: Planet;
  people?: People;
  disable: boolean;
  onPressItem?: (item: People) => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  film,
  isLarge = false,
  planet,
  people,
  disable,
  onPressItem,
}: InfoCardProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={[styles.card, {borderColor: isDarkTheme ? '#fff' : '#000'}]}
        disabled={disable}
        onPress={() => {
          onPressItem!(people!);
        }}>
        <View style={styles.cardContainer}>
          {isLarge ? (
            <PlanetsSection planet={planet!} />
          ) : (
            <>
              {film ? (
                <FilmSection film={film!} />
              ) : (
                <PeopleSection people={people!} />
              )}
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
});
