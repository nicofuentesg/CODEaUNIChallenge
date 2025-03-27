import {createRequestOptions} from '../apiConfig.ts';
import {
  transformVehicleData,
  VehicleApiResponseSchema,
} from '../../types/schemas/VehicleSchema.ts';

export const getVehicleById = async (url: string) => {
  try {
    const {options} = await createRequestOptions('GET');
    const response = await fetch(url, options);
    const apiResponse = await response.json();
    const result = VehicleApiResponseSchema.safeParse(apiResponse);
    if (!result.success) {
      throw new Error('Error al obtener el vehículo');
    }
    return transformVehicleData(result.data!);
  } catch (e) {
    console.log('Error al obtener el vehículo:', e);
    throw e;
  }
};
