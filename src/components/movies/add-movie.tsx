import { useState} from 'react';
import {MovieDto } from "../../models/movies/movie.model";
import { MovieForm } from "../../forms/movies/movie.form";
import { useNavigate } from "react-router-dom";
import { movieService } from "../../services/movie.service";
import { GenreDto } from "../../models/genres/genre.model";
import { useObservable } from '../../utils/hooks/use-observable.hook';
import { genreService } from '../../services/genre.service';



export const AddMovie = () => {
  const [movie] = useState({
    id: "",
    title: "",
    numberInStock: 0,
    genreId: "",
    dailyRentalRate: 0,
  });
  const genres = useObservable(genreService.findAll(), [] as GenreDto[]) as GenreDto[];

  const navigate = useNavigate();

  const movieSubmitHandler = (movieDto: MovieDto) => {
    movieDto.numberInStock = Number(movieDto.numberInStock);
    movieDto.dailyRentalRate = Number(movieDto.dailyRentalRate);
    
    movieService.create(
      movieDto
    ).subscribe(movie => console.log({movie}));
    
    //console.log({ movieOutput });
    //setMovie(movieOutput);

    navigate("/movies");
  };

  const backToList = () => {
    navigate('/movies');
  };

  //useReturnUrl("/add-movie"); //---> Update the returnUrl;

  return (
    <MovieForm
      initialMovie={movie}
      backToList={backToList}
      genres={genres}
      onMovie={movieSubmitHandler}
    />
  );
};
