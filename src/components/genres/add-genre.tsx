import { useState } from "react";
import { GenreDto } from "../../models/genres/genre.model";
import { GenreForm } from "../../forms/genres/genre.form";
import { useNavigate } from "react-router-dom";
import { genreService } from "../../services/genre.service";


export const AddGenre = () => {
  const [genre] = useState({} as GenreDto);

  const navigate = useNavigate();

  const genreSubmitHandler = (genreDto: GenreDto) => {

    genreService.create(genreDto).subscribe(genre => console.log({genre}))
   
    navigate("/genres");
  };

  const backToList = () => {
    navigate('/genres');
  };


  return (
    <GenreForm
      initialGenre={genre}
      backToList={backToList}
      onGenre={genreSubmitHandler}
    />
  );
};
