import {z} from 'zod';
import {Film} from '../../models/Film.ts';
const FilmSchema = z.object({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
  species: z.array(z.string()),
  starships: z.array(z.string()),
  vehicles: z.array(z.string()),
  characters: z.array(z.string()),
  planets: z.array(z.string()),
  url: z.string(),
  created: z.string(),
  edited: z.string(),
});

export const FilmsApiResponseSchema = z.array(FilmSchema);
export const FilmApiResponseSchema = FilmSchema;
// Función para transformar los datos de la API en la estructura en español
export const transformFilmData = (data: z.infer<typeof FilmSchema>): Film => {
  return {
    titulo: data.title,
    id_episodio: data.episode_id,
    apertura: data.opening_crawl,
    director: data.director,
    productor: data.producer,
    fecha_lanzamiento: data.release_date,
    especies: data.species,
    naves_estelares: data.starships,
    vehiculos: data.vehicles,
    personajes: data.characters,
    planetas: data.planets,
    url: data.url,
    creado: data.created,
    editado: data.edited,
  };
};
