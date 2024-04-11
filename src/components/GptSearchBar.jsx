import { RiOpenaiFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { lang } from "../utils/LanguageConstants";
import { useRef } from "react";
import { genAI } from "../utils/genAi";
import { api_options } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  // console.log(language);

  const searchTMdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      api_options
    );
    const json = data.json();
    // console.log(json);
    return json;
  };

  const handleSearch = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // Make api call to openAi
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = gptQuery;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // console.log(text);
    const geMovies = text.split(",");
    //convert prompt result to array
    console.log(geMovies);

    // search tmdp for movies

    const promiseArray = geMovies.map((movie) => searchTMdb(movie));
    // console.log(promiseArray);

    const geMoviesArr = await Promise.all(promiseArray);
    console.log(geMoviesArr);
    // push movies to store
    dispatch(addGptMovies({ movieNames: geMovies, movieResults: geMoviesArr }));
  };

  return (
    <>
      <div className="w-1/2 bg-black h-20 flex justify-between  items-center  top-[30%] right-[25%] absolute z-10 shadow-lg bg-opacity-70">
        <form className=" w-full h-10  grid-cols-9 flex items-center justify-center ">
          <input
            ref={searchText}
            type="text"
            placeholder={lang[language].searchPlaceholder}
            className="w-2/3 m-5 p-3  text-white bg-[#0F0F0F] opacity-65 border-[1px] border-[#7a7070] rounded  font-medium text-opacity-100"
          />
          <div
            onClick={handleSearch}
            id="gptSearchBtn"
            className="group my-3 hover:bg-[#c1111a] rounded w-1/3 p-2  bg-[#e50914] text-white active:bg-[#c1111acc] cursor-pointer tracking-wider flex items-center justify-center gap-3 "
          >
            <RiOpenaiFill className="group-hover:animate-spin" size={"2rem"} />{" "}
            <h1 className="group-hover:animate-pulse ">
              {lang[language].searchBtn}
            </h1>
          </div>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
