import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movie.movieTrailer);
  const getMovieTrailer = async () => {
    const movieData = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?`,
      api_options
    );
    const movieJson = await movieData.json();
    // console.log(json);
    const filterTrailer = movieJson.results.filter(
      (item) => item.type == "Trailer"
    );
    // console.log(filterTrailer);
    const Trailer = filterTrailer[0];

    dispatch(addMovieTrailer(Trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
