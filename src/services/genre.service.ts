import { BehaviorSubject} from 'rxjs';
import { GenreDto } from "../models/genres/genre.model";
import { DataService } from "./data.service";
import { CreateGenreDto } from '../models/genres/create-genre.model';
import { UpdateGenreDto } from '../models/genres/update-genre.model';

type Genre = CreateGenreDto | UpdateGenreDto

class GenreService extends DataService<Genre> {
  private genresSubject = new BehaviorSubject([] as GenreDto[]);

  updateGenres$(value: GenreDto[]): void {
    this.genresSubject.next(value);
  }
}

const baseUrl: string = process.env.REACT_APP_GENRES_URL!;


export const genreService = new GenreService(baseUrl);
