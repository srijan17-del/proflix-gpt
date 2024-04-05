import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer = () => {
  useNowPlayingMovies();

  const movie = useSelector((store) => store.movie);
  if (movie.nowPlayingMovies == null) return;

  console.log(movie.mainMovie);
  const { original_title, overview, id, adult } = movie.mainMovie;
  console.log(original_title, overview, id, adult);

  return (
    <div>
      <VideoBg id={id} adult={adult}></VideoBg>
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
    </div>
  );
};

export default MainContainer;
