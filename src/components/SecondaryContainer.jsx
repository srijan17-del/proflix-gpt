import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  if (movies == null) return;

  const nowPlayingMovies = movies.nowPlayingMovies;
  const popularMovies = movies.popularMovies;
  const topRatedMovies = movies.topRatedMovies;
  const upcomingMovies = movies.upcomingMovies;

  return (
    <div className="bg-[#141414] w-full absolute z-40 ">
      <div
        className="w-full h-[10rem] bg-gradient-to-t from-[#141414] absolute -z-10 
      -mt-[10rem] "
      ></div>
      <div className=" overflow-hidden w-full -mt-32 pl-7">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}></MovieList>
        <MovieList title={"Popular"} movies={popularMovies}></MovieList>
        <MovieList title={"Top Rated"} movies={topRatedMovies}></MovieList>
        <MovieList title={"Upcoming"} movies={upcomingMovies}></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
