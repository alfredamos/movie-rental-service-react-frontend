import { MovieDto } from "../../models/movies/movie.model";
import { DisplayMovies } from "./display-movies";
import { Link } from "react-router-dom";
import { movieService } from "../../services/movie.service";
import { useObservable } from "../../utils/hooks/use-observable.hook";

export const ListMovie = () => {
  const movies = useObservable(
    movieService.findAll(),
    [] as MovieDto[]
  ) as MovieDto[];

  return (
    <div className="bmovie" style={{ padding: "10px" }}>
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">Movie List</h4>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bmovieed table-responsive">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Rental Fee</th>
                <th>Number in stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <DisplayMovies key={movie.id} movie={movie} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <Link
            to="/add-movie"
            className="btn btn-outline-secondary form-control"
          >
            Add movie
          </Link>
        </div>
      </div>
    </div>
  );
};
