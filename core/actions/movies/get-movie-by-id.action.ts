import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interface/movie.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";
import { MovieDBMovieRespose } from "../../../infrastructure/interface/moviedb-movie.response";

export const getMovieByIdAction = async (
  id: number | string,
): Promise<CompleteMovie> => {
  try {
    //Apuntamos a la raiz de axios que ya tiene la URL base configurada
    const { data } = await movieApi.get<MovieDBMovieRespose>(`/${id}`);
    console.log("Peliculas HTTP cargada");
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw "No se pudo cargar la pelicula";
  }
};
