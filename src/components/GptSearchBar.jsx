import { RiOpenaiFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { lang } from "../utils/LanguageConstants";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  console.log(language);

  return (
    <>
      <div className="w-1/2 bg-black h-20 flex justify-between  items-center  top-[30%] right-[25%] absolute z-10 shadow-lg bg-opacity-70">
        <form className=" w-full h-10  grid-cols-9 flex items-center justify-center ">
          <input
            type="text"
            placeholder={lang[language].searchPlaceholder}
            className="w-2/3 m-5 p-3  text-white bg-[#0F0F0F] opacity-65 border-[1px] border-[#7a7070] rounded  font-medium text-opacity-100"
          />
          <div
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
