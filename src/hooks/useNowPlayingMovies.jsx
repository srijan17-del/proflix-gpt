import { useDispatch } from "react-redux";
import { addMovie, addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { api_options } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      api_options
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));

    const index = Math.floor(Math.random() * 19);
    const movie = json.results[index];

    dispatch(addMovie(movie));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
