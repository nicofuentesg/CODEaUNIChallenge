import {z} from 'zod';
import {People} from '../../models/People.ts';

const PeoplesSchema = z.object({
  name: z.string(),
  birth_year: z.string(),
  eye_color: z.string(),
  gender: z.string(),
  hair_color: z.string(),
  height: z.string(),
  mass: z.string(),
  skin_color: z.string(),
  homeworld: z.string(),
  films: z.array(z.string()),
  species: z.array(z.string()),
  starships: z.array(z.string()),
  vehicles: z.array(z.string()),
  url: z.string(),
  created: z.string(),
  edited: z.string(),
});

export const PeopleApiResponseSchema = z.array(PeoplesSchema);

export const transformPeopleData = (
  data: z.infer<typeof PeoplesSchema>,
): People => {
  return {
    nombre: data.name,
    anioNacimiento: data.birth_year,
    colorOjos: data.eye_color,
    genero: data.gender,
    colorCabello: data.hair_color,
    altura: data.height,
    peso: data.mass,
    colorPiel: data.skin_color,
    planetaNatal: data.homeworld,
    peliculas: data.films,
    especies: data.species,
    navesEstelares: data.starships,
    vehiculos: data.vehicles,
    url: data.url,
    creado: data.created,
    editado: data.edited,
  };
};
