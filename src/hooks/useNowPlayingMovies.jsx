import { useDispatch, useSelector } from "react-redux";
import {
  addMovie,
  addNowPlayingMovies,
  addMovieTrailer,
} from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { api_options } from "../utils/constants";
import useMovieTrailer from "./useMovieTrailer";

const useNowPlayingMovies = () => {
  // const [moviesData, setMoviesData] = useState(null);
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      api_options
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
    //choosing random movie trailer
    const index = Math.floor(Math.random() * 19);
    const movie = json.results[index];
    // const id = movie.id;
    // console.log(id);
    dispatch(addMovie(movie));
    // setMoviesData(movie);
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
  // return moviesData;
};
export default useNowPlayingMovies;
