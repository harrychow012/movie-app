import { create } from "axios";

export const movieApi = create({
  // URL base preconfigurada
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  // Parámetros que se enviarán automáticamente en TODAS las peticiones
  params: {
    language: "es-MX", // Ustedes pueden usar en-US o es-MX según prefieran
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
  },
});
