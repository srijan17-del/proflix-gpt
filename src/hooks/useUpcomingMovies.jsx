import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      api_options
    );
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useUpcomingMovies;
