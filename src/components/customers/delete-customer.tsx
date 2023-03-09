import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { customerService } from "../../services/customer.service";
import { useObservable } from "../../utils/hooks/use-observable.hook";
import { CustomerDto } from "../../models/customers/customer.model";
import { DeleteItem } from "../../utils/general/delete-item.util";
import { SingleCustomer } from "./single-customer";

export const DeleteCustomer = () => {
  const { id } = useParams();
  const initialCustomer = useObservable(
    customerService.findOne(id!),
    {} as CustomerDto
  ) as CustomerDto;
  const [customer, setCustomer] = useState(initialCustomer);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  const navigate = useNavigate();

  const customerUrl = "customers";
  const url = `${customerUrl}/${id}`;

  const deleteClick = () => {
    setShowDelete(!showDelete);
    setDeleteMessage(
      `Do you want to delete customer belonging to customer : ${customer.name}?`
    );
    setDeleteTitle("Customer Delete Confirmation!");
  };

  const deleteCustomer = (value: boolean) => {
    if (value) {
      customerService.remove(url).subscribe();
      //setCustomer(deletedCustomer);
      navigate("/");
    } else {
      navigate("/customers");
    }
  };

  return (
    <>
      {showDelete ? (
        <DeleteItem
          deleteMessage={deleteMessage}
          deleteTitle={deleteTitle}
          deleteItem={deleteCustomer}
          cancelButton="Cancel"
          submitButton="Delete"
        />
      ) : (
        <SingleCustomer customer={customer} deleteClick={deleteClick} />
      )}
    </>
  );
};
