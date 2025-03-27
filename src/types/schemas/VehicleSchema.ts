import {z} from 'zod';
import {Vehicle} from '../../models/Vehicle.ts';

export const VehicleSchema = z.object({
  name: z.string(),
  model: z.string().optional().default('Desconocido'), // Si el modelo no está disponible, se asigna 'Desconocido'.
  vehicle_class: z.string().optional().default('Desconocido'), // Si no se proporciona la clase del vehículo, se asigna 'Desconocido'.
  manufacturer: z.string().optional().default('Desconocido'), // Si no hay fabricante, se asigna 'Desconocido'.
  length: z.string().optional().default('Desconocido'), // Longitud opcional con valor predeterminado.
  cost_in_credits: z.string().optional().default('Desconocido'), // Si el costo no está disponible, se asigna 'Desconocido'.
  crew: z.string().optional().default('Desconocido'), // Tripulación opcional.
  passengers: z.string().optional().default('Desconocido'), // Pasajeros opcionales.
  max_atmosphering_speed: z.string().optional().default('Desconocido'), // Velocidad máxima opcional.
  cargo_capacity: z.string().optional().default('Desconocido'), // Capacidad de carga opcional.
  consumables: z.string().optional().default('Desconocido'), // Consumibles opcionales.
  films: z.array(z.string()).optional().default([]), // Películas (array de URLs) opcional.
  pilots: z.array(z.string()).optional().default([]), // Pilotos opcionales (array de URLs).
  url: z.string(), // URL obligatoria.
  created: z.string(), // Fecha de creación obligatoria.
  edited: z.string(), // Fecha de edición obligatoria.
});

export const VehicleApiResponseSchema = VehicleSchema;

// Función para transformar los datos de la API en la estructura en español
export const transformVehicleData = (
  data: z.infer<typeof VehicleSchema>,
): Vehicle => {
  return {
    nombre: data.name,
    modelo: data.model!,
    claseVehiculo: data.vehicle_class!,
    fabricante: data.manufacturer!,
    longitud: data.length!,
    costoCreditos: data.cost_in_credits!,
    tripulacion: data.crew!,
    pasajeros: data.passengers!,
    velocidadMaxima: data.max_atmosphering_speed!,
    capacidadCarga: data.cargo_capacity!,
    consumibles: data.consumables!,
    peliculas: data.films!,
    pilotos: data.pilots!,
    url: data.url,
    creado: data.created,
    editado: data.edited,
  };
};
