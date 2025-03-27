import {People} from '../../models/People.ts';
import {Specie} from '../../models/Specie.ts';
import {Film} from '../../models/Film.ts';
import {Vehicle} from '../../models/Vehicle.ts';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {InfoSection} from '../molecule/InfoSection.tsx';
import ICONS from '../../assets/images';

interface BottomSheetContentProps {
  selectedItem: People; // Puedes ajustar los tipos según tu modelo de datos
  species: Specie[];
  films: Film[];
  vehicles: Vehicle[];
}

export const ButtomSheetContent: React.FC<BottomSheetContentProps> = ({
  selectedItem,
  species,
  films,
  vehicles,
}) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <ScrollView
      style={[
        styles.scrollViewButtonSheet,
        {backgroundColor: isDarkTheme ? '#000' : '#fff'},
      ]}>
      <Text
        style={[styles.primaryText, {color: isDarkTheme ? '#fff' : '#000'}]}>
        {selectedItem?.nombre}
      </Text>
      <View style={styles.containerButton}>
        <InfoSection
          title={'Información General'}
          details={
            selectedItem
              ? `El nombre del personaje es ${selectedItem?.nombre}. Nació en el año ${selectedItem?.anioNacimiento} y su género es ${selectedItem?.genero}. Además, su color de ojos es ${selectedItem?.colorOjos}.`
              : 'No hay información disponible.'
          }
          icon={ICONS.INFORMATION}
        />

        <InfoSection
          title={'Especie'}
          details={
            species?.length > 0
              ? species
                  .map(
                    species =>
                      `${species?.nombre} es una especie de tipo ${species?.clasificacion}. Se caracteriza por su color de piel ${species?.coloresPiel}, con un promedio de altura de ${species?.alturaPromedio} cm. Su esperanza de vida es de ${species?.esperanzaVida} años y su idioma común es el ${species?.idioma}.`,
                  )
                  .join(', ')
              : 'No hay especies disponibles.'
          }
          icon={ICONS.GLOBE}
        />

        <InfoSection
          title={'Películas'}
          details={
            films?.length > 0
              ? `${films.map(film => film?.titulo).join(', ')}`
              : 'No hay películas disponibles.'
          }
          icon={ICONS.FILM} // Ícono para películas
        />

        <InfoSection
          title={'Vehículos'}
          details={
            vehicles?.length > 0
              ? vehicles
                  .map(vehicle => {
                    return `El vehículo ${vehicle?.nombre} es un modelo ${vehicle?.modelo} de clase ${vehicle?.claseVehiculo}. Fue fabricado por ${vehicle?.fabricante} y tiene una longitud de ${vehicle?.longitud} metros. Su costo en créditos galácticos es ${vehicle?.costoCreditos}. Este vehículo puede transportar hasta ${vehicle?.pasajeros} pasajeros y tiene una tripulación de ${vehicle?.tripulacion} personas. Además, puede alcanzar una velocidad máxima de ${vehicle?.velocidadMaxima} y tiene una capacidad de carga de ${vehicle?.capacidadCarga} kilogramos. Es capaz de operar sin reabastecimiento por ${vehicle?.consumibles} `;
                  })
                  .join('\n\n')
              : 'No hay vehículos disponibles.'
          }
          icon={ICONS.STARSHIP} // Ícono para vehículos
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewButtonSheet: {
    width: '100%',
    height: '100%',
    paddingBottom: 128,
  },
  bottomSheetContent: {
    flex: 1,
    paddingTop: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  primaryText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerButton: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    flex: 1,
  },
});
