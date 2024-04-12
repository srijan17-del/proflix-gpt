import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  console.log(movieResults);
  return (
    <div className="bg-[#141414] w-full absolute z-30 md:-mt-96 -mt-[40rem]">
      <div className=" overflow-hidden w-full  pl-7 mt-4">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index].results}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
