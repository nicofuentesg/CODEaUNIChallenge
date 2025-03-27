import {useQuery} from '@tanstack/react-query';
import {getAllFilm} from '../../services/films/getAllFilm.ts';
import {ItemGallery} from '../../components/organism/ItemGallery.tsx';
import {useCallback, useEffect, useState} from 'react';
import {Loading} from '../../components/atoms/Loading.tsx';
import {ScreenContainer} from '../../components/organism/ScreenContainer.tsx';
import {AppModal} from '../../components/organism/AppModal.tsx';

const FilmsScreen = () => {
  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['films'],
    queryFn: getAllFilm,
  });

  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

export default FilmsScreen;
