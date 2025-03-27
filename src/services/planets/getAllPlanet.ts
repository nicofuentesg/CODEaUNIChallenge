import {COMMON_API_URLS, createRequestOptions} from '../apiConfig.ts';
import {
  PlanetsApiResponseSchema,
  transformPlanetsData,
} from '../../types/schemas/PlanetsSchema.ts';

export const getAllPlanets = async () => {
  try {
    const {options} = await createRequestOptions('GET');
    const response = await fetch(COMMON_API_URLS.planets, options);
    const apiResponse = await response.json();
    const result = PlanetsApiResponseSchema.safeParse(apiResponse.results);
    if (!result.success) {
      return null;
    }
    return result.data.map(transformPlanetsData);
  } catch (e) {
    throw e;
  }
};
