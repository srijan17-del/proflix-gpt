import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
// import useMovieTrailer from "../hooks/useMovieTrailer";

const MainContainer = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movie = useSelector((store) => store.movie);

  if (movie.nowPlayingMovies == null) return;

  const { original_title, overview, id, adult } = movie.mainMovie;

  return (
    <div className="relative">
      <VideoBg id={id} adult={adult}></VideoBg>
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
    </div>
  );
};

export default MainContainer;
