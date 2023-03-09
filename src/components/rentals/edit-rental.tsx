import { RentalDto } from "../../models/rentals/rental.model";
import { RentalForm } from "../../forms/rentals/rental.form";
import { useNavigate, useParams } from "react-router-dom";
import { customerService } from "../../services/customer.service";
import { CustomerDto } from "../../models/customers/customer.model";
import { useObservable } from "../../utils/hooks/use-observable.hook";
import { movieService } from "../../services/movie.service";
import { MovieDto } from "../../models/movies/movie.model";
import { rentalService } from "../../services/rental.service";

export const EditRental = () => {
  const {id} = useParams();
  const rental = useObservable(rentalService.findOne(id!), {} as RentalDto) as RentalDto;
  const customers = useObservable(
    customerService.findAll(),
    [] as CustomerDto[]
  ) as CustomerDto[];
  const movies = useObservable(
    movieService.findAll(),
    [] as MovieDto[]
  ) as MovieDto[];

  const navigate = useNavigate();


  const rentalSubmitHandler = (rentalDto: RentalDto) => {
    rentalDto.rentalFee = Number(rentalDto.rentalFee);

    rentalService
      .update(id!, rentalDto)
      .subscribe((rental) => console.log({ rental }));

    navigate("/");
  };

  const backToList = () => {
    navigate("/");
  };

  return (
    <RentalForm
      initialRental={rental}
      backToList={backToList}
      customers={customers}
      movies={movies}
      onRental={rentalSubmitHandler}
    />
  );
};
