import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { rentalService } from "../../services/rental.service";
import { useObservable } from "../../utils/hooks/use-observable.hook";
import { RentalDto } from "../../models/rentals/rental.model";
import { DeleteItem } from "../../utils/general/delete-item.util";
import { SingleRental } from "./single-rental";

export const DetailRental = () => {
  const { id } = useParams();
  const initialRental = useObservable(
    rentalService.findOne(id!),
    {} as RentalDto
  ) as RentalDto;
  const [rental, setRental] = useState(initialRental);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  const navigate = useNavigate();

  const rentalUrl = "rentals";
  const url = `${rentalUrl}/${id}`;

  const deleteClick = () => {
    setShowDelete(!showDelete);
    setDeleteMessage(
      `Do you want to delete rental belonging to customer : ${rental.id}?`
    );
    setDeleteTitle("Rental Delete Confirmation!");
  };

  const deleteRental = (value: boolean) => {
    if (value) {
      rentalService.remove(url).subscribe((rental) => console.log({ rental }));

      //setRental(deletedRental);
      navigate("/");
    } else {
      navigate("/rentals");
    }
  };

  return (
    <>
      {showDelete ? (
        <DeleteItem
          deleteMessage={deleteMessage}
          deleteTitle={deleteTitle}
          deleteItem={deleteRental}
          cancelButton="Cancel"
          submitButton="Delete"
        />
      ) : (
        <SingleRental rental={rental} deleteClick={deleteClick} />
      )}
    </>
  );
};
