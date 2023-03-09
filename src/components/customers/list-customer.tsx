import { CustomerDto } from "../../models/customers/customer.model";
import { DisplayCustomers } from "./display-customers";
import { Link } from "react-router-dom";
import { customerService } from "../../services/customer.service";
import { useObservable } from '../../utils/hooks/use-observable.hook';

export const ListCustomer = () => {  
  const customers = useObservable(customerService.findAll(), [] as CustomerDto[]) as CustomerDto[];

  console.log({customers});
  

  return (
    <div className="bcustomer" style={{ padding: "10px" }}>
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">Customer List</h4>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bcustomered table-responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Gold</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <DisplayCustomers key={customer.id} customer={customer} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <Link
            to="/add-customer"
            className="btn btn-outline-secondary form-control"
          >
            Add customer
          </Link>
        </div>
      </div>
    </div>
  );
};
