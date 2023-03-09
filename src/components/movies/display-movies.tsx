import { Link } from "react-router-dom";
import { MovieDto } from "../../models/movies/movie.model";

interface DisplayMovieProp {
  movie: MovieDto;
}

export const DisplayMovies = ({ movie }: DisplayMovieProp) => {
  return (
    <tr>
      <td>
        <Link
          to={`/detail-movie/${movie.id}`}
          style={{ textDecoration: "none" }}
        >
          {movie.title}
        </Link>
      </td>
      <td>{movie.genre?.name}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>{movie.numberInStock}</td>
      <td>
        <Link
          className="btn btn-outline-warning m-1"
          to={`/edit-movie/${movie.id}`}
        >
          Edit
        </Link>
        <Link
          className="btn btn-outline-danger m-1"
          to={`/delete-movie/${movie.id}`}
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};
