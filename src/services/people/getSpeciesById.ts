import {createRequestOptions} from '../apiConfig.ts';
import {
  SpeciesSchema,
  transformSpeciesData,
} from '../../types/schemas/speciesSchema.ts';

export const getSpeciesById = async (url: string) => {
  try {
    const {options} = await createRequestOptions('GET');
    const response = await fetch(url, options);
    const apiResponse = await response.json();
    const result = SpeciesSchema.safeParse(apiResponse);

    if (!result.success) {
      throw new Error('Error al obtener la especie');
    }
    return transformSpeciesData(result.data!);
  } catch (e) {
    console.log('Error al obtener la especie:', e);
    throw e;
  }
};
