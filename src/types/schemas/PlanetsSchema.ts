import {z} from 'zod';
import {Planet} from '../../models/Planet.ts';

// Esquema de validación para los planetas
const PlanetsSchema = z.object({
  name: z.string(),
  diameter: z.string(),
  rotation_period: z.string(),
  orbital_period: z.string(),
  gravity: z.string(),
  population: z.string(),
  climate: z.string(),
  terrain: z.string(),
  surface_water: z.string(),
  residents: z.array(z.string()),
  films: z.array(z.string()),
  url: z.string(),
  created: z.string(),
  edited: z.string(),
});

export const PlanetsApiResponseSchema = z.array(PlanetsSchema);

// Función para transformar los datos de la API en la estructura en español
export const transformPlanetsData = (
  data: z.infer<typeof PlanetsSchema>,
): Planet => {
  return {
    nombre: data.name,
    diametro: data.diameter,
    periodo_rotacion: data.rotation_period,
    periodo_orbital: data.orbital_period,
    gravedad: data.gravity,
    poblacion: data.population,
    clima: data.climate,
    terreno: data.terrain,
    agua_superficial: data.surface_water,
    residentes: data.residents,
    peliculas: data.films,
    url: data.url,
    creado: data.created,
    editado: data.edited,
  };
};
