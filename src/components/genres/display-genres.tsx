import { Link } from "react-router-dom";
import { GenreDto } from "../../models/genres/genre.model";

interface DisplayGenreProp {
  genre: GenreDto;
}

export const DisplayGenres = ({ genre }: DisplayGenreProp) => {
  return (
    <tr>
      <td>
        <Link
          to={`/detail-genre/${genre.id}`}
          style={{ textDecoration: "none" }}
        >
          {genre.name}
        </Link>
      </td>    
      <td>
        <Link
          className="btn btn-outline-warning m-1"
          to={`/edit-genre/${genre.id}`}
        >
          Edit
        </Link>
        <Link
          className="btn btn-outline-danger m-1"
          to={`/delete-genre/${genre.id}`}
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};
