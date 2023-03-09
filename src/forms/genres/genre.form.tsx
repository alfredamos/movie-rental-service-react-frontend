import { useState, FormEvent } from "react";
import { GenreDto } from "../../models/genres/genre.model";


interface GenreFormProp {
  initialGenre: GenreDto;
  onGenre: (genreDto: GenreDto) => void;
  backToList: () => void;
}



export const GenreForm = (genreFormProp: GenreFormProp) => {
  const { initialGenre, backToList, onGenre } = genreFormProp;
  const [genre, setGenre] = useState(initialGenre);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onGenre(genre);
  };

  const inputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setGenre({ ...genre, [name]: value });
  };

  return (
    <div className="border" style={{ padding: "10px" }}>
      <form onSubmit={submitHandler}>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={genre.name}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>           
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-outline-primary form-control m-1">
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
