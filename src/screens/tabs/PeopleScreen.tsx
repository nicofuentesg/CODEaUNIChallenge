import {StyleSheet, useColorScheme, View} from 'react-native';
import {SearchBar} from '../../components/molecule/SearchBar.tsx';
import {Loading} from '../../components/atoms/Loading.tsx';
import {ItemGallery} from '../../components/organism/ItemGallery.tsx';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useQueries, useQuery, useQueryClient} from '@tanstack/react-query';
import {getAllPeople} from '../../services/people/getAllPeople.ts';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {People} from '../../models/People.ts';
import ICONS from '../../assets/images';
import {getFilmById} from '../../services/films/getFilmById.ts';
import {getSpeciesById} from '../../services/people/getSpeciesById.ts';
import {getVehicleById} from '../../services/people/getVehicleById.ts';
import {filterSearchInput} from '../../utils/filterSearchInputByName.ts';
import {ScreenContainer} from '../../components/organism/ScreenContainer.tsx';
import {ButtomSheetContent} from '../../components/organism/ButtomSheetContent.tsx';
import {Vehicle} from '../../models/Vehicle.ts';
import {Specie} from '../../models/Specie.ts';
import {Film} from '../../models/Film.ts';
import {AppModal} from '../../components/organism/AppModal.tsx';

const PeopleScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<People | null>(null); // Para almacenar el ítem seleccionado
  const [peoples, setPeoples] = useState<People[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const queryClient = useQueryClient();
  const theme = useColorScheme();

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['people'],
    queryFn: getAllPeople,
  });

  const results = useQueries({
    queries:
      selectedItem?.peliculas?.map((filmUrl, index) => {
        return {
          queryKey: ['film', index],
          queryFn: () => getFilmById(filmUrl),
          staleTime: Infinity,
        };
      }) || [],
  });

  const resultsSpecie = useQueries({
    queries:
      selectedItem?.especies?.map((specieUrl, index) => {
        return {
          queryKey: ['specie', index], // Usamos la clave única aquí
          queryFn: () => getSpeciesById(specieUrl),
          staleTime: Infinity,
        };
      }) || [],
  });

  const resultsVehicle = useQueries({
    queries:
      selectedItem?.vehiculos?.map((specieUrl, index) => {
        return {
          queryKey: ['vehicle', index], // Usamos la clave única aquí
          queryFn: () => getVehicleById(specieUrl),
          staleTime: Infinity,
        };
      }) || [],
  });

  useEffect(() => {
    if (isError) {
      setModalVisible(true);
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      setPeoples(data);
    }
  }, [data]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="none"
        onPress={() => handleDismiss()}
      />
    ),
    [],
  );

  useEffect(() => {
    if (!search) {
      setPeoples(data || []);
    } else if (data) {
      setPeoples(filterSearchInput(data, search));
    }
  }, [data, search]);

  const handleOpenBottomSheet = (item: People) => {
    setSelectedItem(item);
    bottomSheetModalRef.current?.present();
  };

  const handleDismiss = () => {
    Promise.all([
      queryClient.invalidateQueries({queryKey: ['film']}),
      queryClient.invalidateQueries({queryKey: ['specie']}),
      queryClient.invalidateQueries({queryKey: ['vehicle']}),
    ]).finally(() => {
      setSelectedItem(null);
    });
  };

  const films = results
    ?.map(query => query.data)
    .filter((film): film is Film => film !== undefined);
  const species = resultsSpecie
    ?.map(query => query.data)
    .filter((specie): specie is Specie => specie !== undefined);
  const vehicles = resultsVehicle
    ?.map(query => query.data)
    .filter((vehicle): vehicle is Vehicle => vehicle !== undefined);

  const isDarkTheme = theme === 'dark';

  return (
    <ScreenContainer
      refreshing={refreshing}
      onRefresh={onRefresh}
      onSearch={
        <View style={styles.container}>
          <SearchBar value={search} onChange={setSearch} icon={ICONS.SEARCH} />
        </View>
      }
      bottomSheet={
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={['70%']}
          onDismiss={handleDismiss}
          enablePanDownToClose={true}
          handleIndicatorStyle={{backgroundColor: 'gray'}}
          handleStyle={{backgroundColor: isDarkTheme ? '#000' : '#fff'}}
          animationConfigs={{
            damping: 25,
            stiffness: 150,
            mass: 0.2,
            overshootClamping: true,
            restDisplacementThreshold: 0.1,
            restSpeedThreshold: 0.1,
          }}
          backdropComponent={renderBackdrop}>
          <BottomSheetView
            style={styles.bottomSheetContent}
            pointerEvents={'none'}>
            <ButtomSheetContent
              selectedItem={selectedItem!}
              species={species!}
              films={films!}
              vehicles={vehicles!}
            />
          </BottomSheetView>
        </BottomSheetModal>
      }>
      <AppModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      {isLoading ? (
        <Loading />
      ) : (
        <ItemGallery items={peoples!} onItemPress={handleOpenBottomSheet} />
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    paddingHorizontal: 14,
    paddingTop: 8,
  },
  bottomSheetContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default PeopleScreen;
