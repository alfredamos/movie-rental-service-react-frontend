import { useState } from "react";
import { RentalDto } from "../../models/rentals/rental.model";
import { RentalForm } from "../../forms/rentals/rental.form";
import { useNavigate } from "react-router-dom";
import { customerService } from '../../services/customer.service';
import { CustomerDto } from '../../models/customers/customer.model';
import { useObservable } from "../../utils/hooks/use-observable.hook";
import { movieService } from "../../services/movie.service";
import { MovieDto } from '../../models/movies/movie.model';
import { rentalService } from "../../services/rental.service";


export const AddRental = () => {
  const [rental] = useState({} as RentalDto);
  const customers = useObservable(customerService.findAll(), [] as CustomerDto[]) as CustomerDto[];
  const movies = useObservable(movieService.findAll(), [] as MovieDto[]) as MovieDto[] 

  const navigate = useNavigate();

  //const rentalUrl = "categories";

  const rentalSubmitHandler = (rentalDto: RentalDto) => {
    rentalDto.rentalFee = Number(rentalDto.rentalFee);

    rentalService.create(      
      rentalDto
    ).subscribe(rental => console.log({rental}));

    //console.log({ rentalOutput });
    //setRental(rentalOutput);

    navigate("/list-rental");
  };

  const backToList = () => {
    navigate('/');
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
