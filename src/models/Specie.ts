export interface Specie {
  nombre: string; // Nombre de la especie
  clasificacion: string; // Clasificación de la especie (mamífero, reptil, etc.)
  designacion: string; // Designación de la especie (sintiente, etc.)
  alturaPromedio: string; // Altura promedio en centímetros
  esperanzaVida: string; // Esperanza de vida en años
  coloresOjos: string; // Colores de ojos, separados por comas
  coloresCabello: string; // Colores de cabello, separados por comas
  coloresPiel: string; // Colores de piel, separados por comas
  idioma: string; // Idioma comúnmente hablado
  planetaOrigen: string; // URL del planeta de origen
  personas: string[]; // Lista de URLs de personajes de esta especie
  peliculas: string[]; // Lista de URLs de películas donde aparece
  url: string; // URL del recurso
  creado: string; // Fecha de creación en formato ISO 8601
  editado: string;
}
