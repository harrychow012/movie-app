import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interface/cast.interface";
import { CredictsResponse } from "@/infrastructure/interface/moviedb-cast.response";
import { CastMapper } from "@/infrastructure/mappers/movie-cast.mappers";

export const getMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CredictsResponse>(
      `/${movieId}/credits`,
    );

    console.log("Creditos HTTP cargados");
    return data.cast.map((cast) => CastMapper.fromMovieDBCastToEntity(cast));
  } catch (error) {
    console.log(error);
    throw "No se pudieron cargar los creditos de la pelicula";
  }
};
