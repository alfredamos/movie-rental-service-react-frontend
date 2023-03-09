import { Link } from "react-router-dom";
import { RentalDto } from "../../models/rentals/rental.model";

interface SingleRentalProp {
  rental: RentalDto;
  deleteClick: () => void;
}

export const SingleRental = ({ rental, deleteClick }: SingleRentalProp) => {
  return (
    <div className="brental" style={{ padding: "10px" }}>
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">rental Detail</h4>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Customer    : {rental?.customer?.name}</li>
            <li className="list-group-item">Movie       : {rental?.movie?.title}</li>
            <li className="list-group-item">Rate        : {rental?.rentalFee}</li>
          </ul>
        </div>
        <div className="card-footer">
          <Link
            to={`/edit-rental/${rental.id}`}
            className="btn btn-outline-warning form-control m-1 "
          >
            Edit
          </Link>
          <Link
            to="/list-rental"
            className="btn btn-outline-secondary form-control m-1 "
          >
            Back
          </Link>
          <button
            className="btn btn-outline-danger form-control m-1"
            onClick={deleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
