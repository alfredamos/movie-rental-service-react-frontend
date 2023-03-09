import { GenreDto } from '../genres/genre.model';
export class CreateMovieDto{
    title!: string;
    genre?: GenreDto;
    genreId?: string;
    numberInStock!: number;
    dailyRentalRate!: number;
}