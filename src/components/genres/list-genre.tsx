import { GenreDto } from "../../models/genres/genre.model";
import { DisplayGenres } from "./display-genres";
import { Link } from "react-router-dom";
import { genreService } from "../../services/genre.service";
import { useObservable } from "../../utils/hooks/use-observable.hook";

export const ListGenre = () => {
  const genres = useObservable(
    genreService.findAll(),
    [] as GenreDto[]
  ) as GenreDto[];

  return (
    <div className="border" style={{ padding: "10px" }}>
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">Genre List</h4>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bgenreed table-responsive">
            <thead>
              <tr>
                <th>Name</th>               
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {genres.map((genre) => (
                <DisplayGenres key={genre.id} genre={genre} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <Link
            to="/add-genre"
            className="btn btn-outline-secondary form-control"
          >
            Add genre
          </Link>
        </div>
      </div>
    </div>
  );
};
