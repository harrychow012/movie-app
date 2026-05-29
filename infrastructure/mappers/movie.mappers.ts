import { Movie } from "../interface/movie.interface";
import { Result } from "../interface/moviedb-response";

export class MovieMapper {
  // Recibe la data cruda (Result) y devuelve nuestra data limpia (Movie)
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      // Construimos la URL completa para las imágenes
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };
}
