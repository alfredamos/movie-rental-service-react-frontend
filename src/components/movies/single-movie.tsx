import { Link } from "react-router-dom";
import { MovieDto } from "../../models/movies/movie.model";

interface SingleMovieProp {
  movie: MovieDto;
  deleteClick: () => void;
}

export const SingleMovie = ({ movie, deleteClick }: SingleMovieProp) => {
  return (
    <div className="bmovie" style={{ padding: "10px" }}>
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">movie Detail</h4>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Title : {movie?.title}</li>
            <li className="list-group-item">Genre : {movie?.genre?.name}</li>
            <li className="list-group-item">Rate : {movie?.dailyRentalRate}</li>
            <li className="list-group-item">Stock : {movie?.numberInStock}</li>
          </ul>
        </div>
        <div className="card-footer">
          <Link
            to={`/edit-movie/${movie.id}`}
            className="btn btn-outline-warning form-control m-1 "
          >
            Edit
          </Link>
          <Link
            to="/movies"
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
