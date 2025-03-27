import {createRequestOptions} from '../apiConfig.ts';
import {
  FilmApiResponseSchema,
  transformFilmData,
} from '../../types/schemas/FilmsSchema.ts';

export const getFilmById = async (url: string) => {
  try {
    const {options} = await createRequestOptions('GET');
    const response = await fetch(url, options);
    const apiResponse = await response.json();

    const result = FilmApiResponseSchema.safeParse(apiResponse);
    if (!result.success) {
      throw new Error('Error al obtener la película');
    }

    return transformFilmData(result.data!);
  } catch (e) {
    console.log('Error al obtener la película:', e);
    throw e;
  }
};
