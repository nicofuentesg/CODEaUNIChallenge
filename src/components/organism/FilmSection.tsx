import {StyleSheet, View} from 'react-native';
import {Film} from '../../models/Film.ts';
import {SectionContainer} from '../molecule/SectionContainer.tsx';
import {InfoSection} from '../molecule/InfoSection.tsx';
import ICONS from '../../assets/images';

interface FilmSectionProps {
  film: Film;
}
export const FilmSection: React.FC<FilmSectionProps> = ({
  film,
}: FilmSectionProps) => {
  return (
    <SectionContainer title={film.titulo}>
      <View style={styles.sectionInformation}>
        <InfoSection
          title="Episodio"
          details={film.id_episodio.toString()}
          icon={ICONS.EPISODE}
        />
        <InfoSection
          title="Estreno"
          details={film.fecha_lanzamiento}
          icon={ICONS.PREMIER}
        />
        <InfoSection
          title="Productor"
          details={film.productor}
          icon={ICONS.PRODUCER}
        />
      </View>
    </SectionContainer>
  );
};

const styles = StyleSheet.create({
  sectionInformation: {
    width: '100%',
  },
});
