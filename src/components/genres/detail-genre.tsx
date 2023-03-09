import { useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { genreService } from "../../services/genre.service";
import { useObservable } from '../../utils/hooks/use-observable.hook';
import { GenreDto } from '../../models/genres/genre.model';
import { DeleteItem } from "../../utils/general/delete-item.util";
import { SingleGenre } from "./single-genre";


export const DetailGenre = () => {
  const { id } = useParams();
  const genre = useObservable(genreService.findOne(id!), {} as GenreDto) as GenreDto;
  const [showDelete, setShowDelete] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  
  const navigate = useNavigate();

  const genreUrl = "genres";
  const url = `${genreUrl}/${id}`;
  
  const deleteClick = () => {
    setShowDelete(!showDelete);
    setDeleteMessage(
      `Do you want to delete genre belonging to customer : ${genre.name}?`
    );
    setDeleteTitle("Genre Delete Confirmation!");
  };

  const deleteGenre = (value: boolean) => {
    if (value) {
      genreService.remove(url).subscribe();
      //setGenre(deletedGenre);
      navigate("/genres");
    } else {
      navigate('/genres');
    }
  };


  return (
    <>
      {showDelete ? (
        <DeleteItem
          deleteMessage={deleteMessage}
          deleteTitle={deleteTitle}
          deleteItem={deleteGenre}
          cancelButton="Cancel"
          submitButton="Delete"
        />
      ) : (
        <SingleGenre genre={genre} deleteClick={deleteClick} />
      )}
    </>
  );
};
