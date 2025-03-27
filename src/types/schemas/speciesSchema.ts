import {z} from 'zod';
import {Specie} from '../../models/Specie.ts';

export const SpeciesSchema = z.object({
  name: z.string(), // Species name
  classification: z.string(), // Classification (mammal, reptile, etc.)
  designation: z.string(), // Designation (sentient, etc.)
  average_height: z.string(), // Average height in cm
  average_lifespan: z.string(), // Lifespan in years
  eye_colors: z.string(), // Common eye colors, comma-separated
  hair_colors: z.string(), // Common hair colors, comma-separated
  skin_colors: z.string(), // Common skin colors, comma-separated
  language: z.string(), // Common language
  homeworld: z.string().nullable(), // URL of the homeworld planet
  people: z.array(z.string()), // Array of character URLs
  films: z.array(z.string()), // Array of film URLs
  url: z.string(), // API resource URL
  created: z.string(), // Creation date (ISO 8601 format)
  edited: z.string(), // Last edited date (ISO 8601 format)
});

export const SpeciesApiResponse = SpeciesSchema;

export const transformSpeciesData = (
  data: z.infer<typeof SpeciesSchema>,
): Specie => {
  return {
    nombre: data.name,
    clasificacion: data.classification,
    designacion: data.designation,
    alturaPromedio: data.average_height,
    esperanzaVida: data.average_lifespan,
    coloresOjos: data.eye_colors,
    coloresCabello: data.hair_colors,
    coloresPiel: data.skin_colors,
    idioma: data.language,
    planetaOrigen: data.homeworld!,
    personas: data.people,
    peliculas: data.films,
    url: data.url,
    creado: data.created,
    editado: data.edited,
  };
};
