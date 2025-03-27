const BASE_URL = 'https://swapi.py4e.com/api/';

export const COMMON_API_URLS = {
  films: `${BASE_URL}films/`,
  people: `${BASE_URL}people/`,
  planets: `${BASE_URL}planets/`,
};

const BASE_HEADERS = {
  accept: 'application/json',
  'content-type': 'application/json',
};

export const createRequestOptions = async (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
) => {
  return {
    options: {
      method: method,
      headers: {
        ...BASE_HEADERS,
      },
    },
  };
};
