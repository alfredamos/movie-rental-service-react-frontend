import { Link } from "react-router-dom";
import { RentalDto } from "../../models/rentals/rental.model";

interface DisplayRentalProp {
  rental: RentalDto;
}

export const DisplayRentals = ({ rental }: DisplayRentalProp) => {
  return (
    <tr>
      <td>
        <Link
          to={`/detail-rental/${rental.id}`}
          style={{ textDecoration: "none" }}
        >
          {rental.customer?.name
          }
        </Link>
      </td>
      <td>{rental.movie?.title}</td>
      <td>{rental.rentalFee}</td>
      <td>
        <Link
          className="btn btn-outline-warning m-1"
          to={`/edit-rental/${rental.id}`}
        >
          Edit
        </Link>
        <Link
          className="btn btn-outline-danger m-1"
          to={`/delete-rental/${rental.id}`}
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};
