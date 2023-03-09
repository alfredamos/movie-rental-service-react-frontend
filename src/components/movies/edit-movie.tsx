import { useState, useEffect } from "react";
import { MovieDto } from "../../models/movies/movie.model";
import { MovieForm } from "../../forms/movies/movie.form";
import { useNavigate, useParams } from "react-router-dom";
import { movieService } from "../../services/movie.service";
import { GenreDto } from "../../models/genres/genre.model";
import { useObservable } from "../../utils/hooks/use-observable.hook";
import { genreService } from "../../services/genre.service";

export const EditMovie = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const movie = useObservable(
    movieService.findOne(id!),
    {} as MovieDto
  ) as MovieDto;

  
  const genres = useObservable(
    genreService.findAll(),
    [] as GenreDto[]
  ) as GenreDto[];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  //console.log({movie});
  console.log({ genres });

  const navigate = useNavigate();

  const movieSubmitHandler = (movieDto: MovieDto) => {
    movieDto.numberInStock = Number(movieDto.numberInStock);
    movieDto.dailyRentalRate = Number(movieDto.dailyRentalRate);

    movieService
      .update(id!, movieDto)
      .subscribe((movie) => console.log({ movie }));

    navigate("/movies");
  };

  const backToList = () => {
    navigate("/movies");
  };

  return (
    <>
    {
    !isLoading && (
      <MovieForm
        initialMovie={movie}
        backToList={backToList}
        genres={genres}
        onMovie={movieSubmitHandler}
      />
    )
}
</>
  );
};
