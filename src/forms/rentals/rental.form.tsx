import { useState, FormEvent } from "react";
import { RentalDto } from "../../models/rentals/rental.model";
import { CustomerDto } from "../../models/customers/customer.model";
import { MovieDto } from "../../models/movies/movie.model";

interface RentalFormProp {
  initialRental: RentalDto;
  customers: CustomerDto[];
  movies: MovieDto[];
  onRental: (rentalDto: RentalDto) => void;
  backToList: () => void;
}

export const RentalForm = (rentalFormProp: RentalFormProp) => {
  const { initialRental, customers, movies, backToList, onRental } =
    rentalFormProp;
  const [rental, setRental] = useState(initialRental);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRental(rental);
  };

  const selectChangeHandler = (event: FormEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;

    setRental({ ...rental, [name]: value });
  };
  const inputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setRental({ ...rental, [name]: value });
  };

  return (
    <div className="border" style={{ padding: "10px" }}>
      <form onSubmit={submitHandler}>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="customerId" className="form-label">
                Customer
              </label>
              <select
                id="customerId"
                name="customerId"
                value={rental.customerId}
                className="form-select"
                onChange={selectChangeHandler}
              >
                {customers.map((customer) => (
                  <option
                    key={customer.id}
                    id={customer.id}
                    value={customer.id}
                  ></option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="movieId" className="form-label">
                Movie
              </label>
              <select
                id="movieId"
                name="movieId"
                value={rental.movieId}
                className="form-select"
                onChange={selectChangeHandler}
              >
                {movies.map((movie) => (
                  <option
                    key={movie.id}
                    id={movie.id}
                    value={movie.id}
                  ></option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="rentalFee" className="form-label">
                Rental Fee
              </label>
              <input
                id="rentalFee"
                type="number"
                name="rentalFee"
                value={rental.rentalFee}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>
            
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-outline-primary form-control m-1">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary form-control m-1"
              onClick={backToList}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
