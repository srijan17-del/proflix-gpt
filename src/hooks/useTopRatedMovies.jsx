import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      api_options
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useTopRatedMovies;
