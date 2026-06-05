import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interface/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

interface Options {
  page?: number;
  limit?: number; //Opcional por si la api lo soporta en el futuro
}

//Recibimos la pagina con valor por defecto de 1

export const topRatedMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated", {
      params: { page: page },
    });

    // Mapeamos los resultados crudos a nuestra interfaz limpia 'Movie'
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load top rated movies";
  }
};
