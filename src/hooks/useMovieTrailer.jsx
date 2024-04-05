import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?`,
      api_options
    );
    const json = await data.json();
    // console.log(json);
    const filterTrailer = json.results.filter((item) => item.type == "Trailer");
    // console.log(filterTrailer);
    const Trailer = filterTrailer[0];

    dispatch(addMovieTrailer(Trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
