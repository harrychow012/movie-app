//Recibimos el id como argumento

import { getMovieByIdAction } from "@/core/actions/movies/get-movie-by-id.action";
import { getMovieCastAction } from "@/core/actions/movies/get-movie-cast";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", "id"],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { movieQuery };
};

export const useMovieCast = (id: number) => {
  const movieCastQuery = useQuery({
    queryKey: ["movie", "cast", id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { movieCastQuery };
};
