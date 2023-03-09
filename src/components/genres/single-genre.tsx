import { Link } from "react-router-dom";
import { GenreDto } from "../../models/genres/genre.model";

interface SingleGenreProp {
  genre: GenreDto;
  deleteClick: () => void;
}

export const SingleGenre = ({ genre, deleteClick }: SingleGenreProp) => {
  return (
    <div className="bgenre" style={{ padding: "10px" }}>
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">genre Detail</h4>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Name : {genre?.name}</li>
          </ul>
        </div>
        <div className="card-footer">
          <Link
            to={`/edit-genre/${genre.id}`}
            className="btn btn-outline-warning form-control m-1 "
          >
            Edit
          </Link>
          <Link
            to="/genres"
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
