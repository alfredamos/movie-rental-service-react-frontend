import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { movieService } from "../../services/movie.service";
import { useObservable } from "../../utils/hooks/use-observable.hook";
import { MovieDto } from "../../models/movies/movie.model";
import { DeleteItem } from "../../utils/general/delete-item.util";
import { SingleMovie } from "./single-movie";


export const DeleteMovie = () => {
  const { id } = useParams();
  const movie = useObservable(
    movieService.findOne(id!),
    {} as MovieDto
  ) as MovieDto;

  const [showDelete, setShowDelete] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  const navigate = useNavigate();

  const movieUrl = "movies";
  const url = `${movieUrl}/${id}`;

  const deleteClick = () => {
    setShowDelete(!showDelete);
    setDeleteMessage(
      `Do you want to delete movie belonging to customer : ${movie.title}?`
    );
    setDeleteTitle("Movie Delete Confirmation!");
  };

  const deleteMovie = (value: boolean) => {
    if (value) {
      movieService.remove(url).subscribe((movie) => console.log({ movie }));

      //setMovie(deletedMovie);
      navigate("/movies");
    } else {
      navigate("/movies");
    }
  };

  return (
    <>
      {showDelete ? (
        <DeleteItem
          deleteMessage={deleteMessage}
          deleteTitle={deleteTitle}
          deleteItem={deleteMovie}
          cancelButton="Cancel"
          submitButton="Delete"
        />
      ) : (
        <SingleMovie movie={movie} deleteClick={deleteClick} />
      )}
    </>
  );
};
