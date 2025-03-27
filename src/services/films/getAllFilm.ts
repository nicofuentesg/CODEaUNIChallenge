import {COMMON_API_URLS, createRequestOptions} from '../apiConfig.ts';
import {
  FilmsApiResponseSchema,
  transformFilmData,
} from '../../types/schemas/FilmsSchema.ts';

export const getAllFilm = async () => {
  try {
    const {options} = await createRequestOptions('GET');
    const response = await fetch(COMMON_API_URLS.films, options);
    const apiResponse = await response.json();
    const result = FilmsApiResponseSchema.safeParse(apiResponse.results);
    if (!result.success) {
      return null;
    }
    return result.data.map(transformFilmData);
  } catch (e) {
    throw e;
  }
};
