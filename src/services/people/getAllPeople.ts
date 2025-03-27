import {COMMON_API_URLS, createRequestOptions} from '../apiConfig.ts';
import {
  PeopleApiResponseSchema,
  transformPeopleData,
} from '../../types/schemas/PeoplesSchema.ts';

export const getAllPeople = async () => {
  try {
    const {options} = await createRequestOptions('GET');
    const response = await fetch(COMMON_API_URLS.people, options);
    const apiResponse = await response.json();
    const result = PeopleApiResponseSchema.safeParse(apiResponse.results);
    if (!result.success) {
      return null;
    }
    return result.data.map(transformPeopleData);
  } catch (e) {
    throw e;
  }
};
