import {People} from '../models/People.ts';

export const filterSearchInput = (
  peoples: People[] = [],
  text: string,
): People[] => {
  const searchText = text.toLowerCase();
  return peoples.filter(item => item.nombre.toLowerCase().includes(searchText));
};
