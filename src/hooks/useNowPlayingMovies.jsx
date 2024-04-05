import { useDispatch } from "react-redux";
import { addMovie, addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { api_options } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1/",
      api_options
    );
    const json = await data.json();

    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
    // console.log(json.results);
    const index = Math.floor(Math.random() * 19);
    const movie = json.results[index];
    console.log(movie);
    dispatch(addMovie(movie));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
