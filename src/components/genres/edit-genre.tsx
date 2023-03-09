import { GenreDto } from "../../models/genres/genre.model";
import { GenreForm } from "../../forms/genres/genre.form";
import { useNavigate, useParams } from "react-router-dom";
import { genreService } from "../../services/genre.service";
import { useObservable } from '../../utils/hooks/use-observable.hook';

export const EditGenre = () => {
  const {id} = useParams();
  const genre = useObservable(genreService.findOne(id!), {} as GenreDto) as GenreDto;

  const navigate = useNavigate();

  const genreSubmitHandler = (genreDto: GenreDto) => {
    genreService.update(id!, genreDto).subscribe((genre) => console.log({ genre }));

    navigate("/genres");
  };

  const backToList = () => {
    navigate("/genres");
  };

  return (
    <GenreForm
      initialGenre={genre}
      backToList={backToList}
      onGenre={genreSubmitHandler}
    />
  );
};
