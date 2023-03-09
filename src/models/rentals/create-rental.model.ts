import { CustomerDto } from '../customers/customer.model';
import { MovieDto } from '../movies/movie.model';

export class CreateRentalDto{
    customerId!: string;
    customer?: CustomerDto;
    movie?: MovieDto;
    movieId!: string;
    rentalFee!: number;
    dateReturn?: Date;
}