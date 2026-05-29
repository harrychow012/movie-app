import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interface/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const upcomingMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming");

    // Mapeamos los resultados crudos a nuestra interfaz limpia 'Movie'
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load upcoming movies";
  }
};
