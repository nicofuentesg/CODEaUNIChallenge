import {ItemGallery} from '../../components/organism/ItemGallery.tsx';
import {useCallback, useEffect, useState} from 'react';
import {getAllPlanets} from '../../services/planets/getAllPlanet.ts';
import {useQuery} from '@tanstack/react-query';
import {Loading} from '../../components/atoms/Loading.tsx';
import {ScreenContainer} from '../../components/organism/ScreenContainer.tsx';
import {AppModal} from '../../components/organism/AppModal.tsx';

const PlanetsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['planets'],
    queryFn: getAllPlanets,
  });

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

  // Usamos useEffect para manejar el modal cuando hay un error
  useEffect(() => {
    if (isError) {
      setModalVisible(true);
    }
  }, [isError]);

  return (
    <ScreenContainer refreshing={refreshing} onRefresh={onRefresh}>
      <AppModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      {isLoading ? <Loading /> : <ItemGallery items={data!} />}
    </ScreenContainer>
  );
};

export default PlanetsScreen;
