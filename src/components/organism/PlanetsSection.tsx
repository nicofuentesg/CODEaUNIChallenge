import {View, StyleSheet} from 'react-native';
import {Planet} from '../../models/Planet.ts';
import {InfoSection} from '../molecule/InfoSection.tsx';
import ICONS from '../../assets/images';
import {SectionContainer} from '../molecule/SectionContainer.tsx';

interface PlanetsSectionProps {
  planet: Planet;
}
export const PlanetsSection: React.FC<PlanetsSectionProps> = ({
  planet,
}: PlanetsSectionProps) => {
  return (
    <SectionContainer title={planet.nombre}>
      <View style={styles.sectionInformation}>
        <InfoSection
          title="Informacion General"
          details={`Este planeta, con un diámetro de ${planet.diametro}, presenta un periodo de rotación de ${planet.periodo_rotacion} días, lo que define el tiempo que tarda en dar una vuelta sobre su propio eje. En cuanto a su órbita, el planeta completa un ciclo alrededor de su estrella en ${planet.periodo_orbital} días, lo que determina su año. Estos datos nos dan una idea clara de las características únicas de este cuerpo celeste.`}
          icon={ICONS.INFORMATION}
        />
        <InfoSection
          title="Características Geográficas"
          details={`En cuanto a su geografía, el planeta posee un terreno ${planet.terreno}, con ${planet.agua_superficial} de agua superficial, lo que lo hace único en su tipo.`}
          icon={ICONS.TERRAIN}
        />
        <InfoSection
          title="Población y Habitantes"
          details={`La población de ${planet.nombre} se estima en ${planet.poblacion} habitantes`}
          icon={ICONS.POPULATION}
        />
      </View>
    </SectionContainer>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 8,
    alignItems: 'flex-start',
    paddingLeft: 8,
  },
  sectionInformation: {
    flex: 1,
  },
});
