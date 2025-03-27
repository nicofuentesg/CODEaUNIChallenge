export interface Film {
  titulo: string; // El título de esta película
  id_episodio: number; // El número del episodio de esta película
  apertura: string; // Los párrafos de apertura al principio de esta película
  director: string; // El nombre del director de esta película
  productor: string; // El nombre(s) de los productor(es) de esta película, separados por coma
  fecha_lanzamiento: string; // La fecha de lanzamiento en formato ISO 8601 del país original
  especies: string[]; // Un array de URLs de recursos de las especies que aparecen en esta película
  naves_estelares: string[]; // Un array de URLs de recursos de las naves estelares que aparecen en esta película
  vehiculos: string[]; // Un array de URLs de recursos de los vehículos que aparecen en esta película
  personajes: string[]; // Un array de URLs de recursos de las personas que aparecen en esta película
  planetas: string[]; // Un array de URLs de recursos de los planetas que aparecen en esta película
  url: string; // La URL de este recurso
  creado: string; // La fecha y hora en formato ISO 8601 en la que se creó este recurso
  editado: string; // La fecha y hora en formato ISO 8601 en la que se editó este recurso
}
