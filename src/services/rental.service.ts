import { BehaviorSubject} from 'rxjs';
import { RentalDto } from "../models/rentals/rental.model";
import { DataService } from "./data.service";
import { CreateRentalDto } from '../models/rentals/create-rental.model';
import { UpdateRentalDto } from '../models/rentals/update-rental.model';

type Rental = CreateRentalDto | UpdateRentalDto | RentalDto;

class RentalService extends DataService<Rental> {
  private rentalsSubject = new BehaviorSubject([] as RentalDto[]);
  
  updateRentals$(value: RentalDto[]): void {
    this.rentalsSubject.next(value);
  }
}

const baseUrl: string = process.env.REACT_APP_RENTALS_URL!;


export const rentalService = new RentalService(baseUrl);
