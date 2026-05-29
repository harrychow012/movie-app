import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas de caché
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"], // Identificador único para el caché
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
