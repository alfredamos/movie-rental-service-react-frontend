import { BehaviorSubject} from 'rxjs';
import { MovieDto } from "../models/movies/movie.model";
import { DataService } from "./data.service";
import { CreateMovieDto } from '../models/movies/create-movie.model';
import { updateMovieDto } from '../models/movies/update-movie.model';

type Movie = CreateMovieDto | updateMovieDto | MovieDto;

class MovieService extends DataService<Movie> {
  private moviesSubject = new BehaviorSubject([] as MovieDto[]);

  updateMovies$(value: MovieDto[]): void {
    this.moviesSubject.next(value);
  }
}

const baseUrl: string = process.env.REACT_APP_MOVIES_URL!;


export const movieService = new MovieService(baseUrl);