import { useState, FormEvent } from "react";
import { MovieDto } from "../../models/movies/movie.model";
import { GenreDto } from "../../models/genres/genre.model";

interface MovieFormProp {
  initialMovie: MovieDto;
  genres: GenreDto[];
  onMovie: (movieDto: MovieDto) => void;
  backToList: () => void;
}

export const MovieForm = (movieFormProp: MovieFormProp) => {
  const { initialMovie, genres, backToList, onMovie } = movieFormProp;
  console.log({initialMovie});
  
  const [movie, setMovie] = useState({
    ...initialMovie,
    genreId: initialMovie.genre?.id,
  });

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onMovie(movie!);
  };

  const inputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setMovie({ ...movie, [name]: value });
  };

  const selectChangeHandler = (event: FormEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;

    setMovie({ ...movie, [name]: value });
  };

  return (
    <div className="border" style={{ padding: "10px" }}>
      <form onSubmit={submitHandler}>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={movie.title}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="numberInStock" className="form-label">
                numberInStock
              </label>
              <input
                id="numberInStock"
                type="number"
                name="numberInStock"
                value={movie.numberInStock}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dailyRentalRate" className="form-label">
                Daily Rental Rate
              </label>
              <input
                id="dailyRentalRate"
                type="number"
                name="dailyRentalRate"
                value={movie.dailyRentalRate}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Genre
              </label>
              <select
                id="genreId"
                name="genreId"
                value={movie.genreId}
                className="form-select"
                onChange={selectChangeHandler}
              >
                {genres?.map((genre) => (
                  <option key={genre.id} value={genre.id} id={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-outline-primary form-control m-1"
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary form-control m-1"
              onClick={backToList}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
