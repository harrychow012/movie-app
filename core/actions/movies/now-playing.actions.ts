import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interface/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");

    // Transformamos el arreglo de "Results" a un arreglo de nuestras "Movies"
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    // console.log(movies); // Si descomentan esto, verán los objetos ya mapeados

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
