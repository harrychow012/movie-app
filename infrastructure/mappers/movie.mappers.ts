import { CompleteMovie, Movie } from "../interface/movie.interface";
import { MovieDBMovieRespose } from "../interface/moviedb-movie.response";
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

  //Nuevo mapper para los detalles
  static fromTheMovieDBToCompleteMovie = (
    movie: MovieDBMovieRespose,
  ): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      budget: movie.budget,
      duration: movie.runtime,
      //Extraemos solo los nombres usando .map
      genres: movie.genres.map((g) => g.name),
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((c) => c.name),
    };
  };
}
