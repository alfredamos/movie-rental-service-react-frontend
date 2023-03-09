import { Link } from "react-router-dom";
import { CustomerDto } from "../../models/customers/customer.model";

interface DisplayCustomerProp {
  customer: CustomerDto;
}


export const DisplayCustomers = ({ customer }: DisplayCustomerProp) => {
  return (
    <tr>
      <td>
        <Link
          to={`/detail-customer/${customer.id}`}
          style={{ textDecoration: "none" }}
        >
          {customer.name}
        </Link>
      </td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>{customer.gender}</td>
      <td>{customer.isGold?.toString()}</td>
      <td>
        <Link
          className="btn btn-outline-warning m-1"
          to={`/edit-customer/${customer.id}`}
        >
          Edit
        </Link>
        <Link
          className="btn btn-outline-danger m-1"
          to={`/delete-customer/${customer.id}`}
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};