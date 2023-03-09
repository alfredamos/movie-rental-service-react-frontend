import { RentalDto } from "../../models/rentals/rental.model";
import { DisplayRentals } from "./display-rentals";
import { Link } from "react-router-dom";
import { rentalService } from "../../services/rental.service";
import { useObservable } from "../../utils/hooks/use-observable.hook";

export const ListRental = () => {
  const rentals = useObservable(
    rentalService.findAll(),
    [] as RentalDto[]
  ) as RentalDto[];

  return (
    <div className="brental" style={{ padding: "10px" }}>
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">Rental List</h4>
        </div>
        <div className="card-body">
          <table className="table table-striped table-brentaled table-responsive">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Movie</th>
                <th>Rental Fee</th>                              
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rentals.map((rental) => (
                <DisplayRentals key={rental.id} rental={rental} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <Link
            to="/add-rental"
            className="btn btn-outline-secondary form-control"
          >
            Add rental
          </Link>
        </div>
      </div>
    </div>
  );
};
