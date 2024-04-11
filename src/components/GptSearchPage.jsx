import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
// import Header from "./Header";

const GptSearchPage = () => {
  return (
    <div>
      <div
        className=" w-full min-h-[110vh] bg-origin-content bg-[image:url(https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg)]
      brightness-50 bg-fixed"
      ></div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  );
};

export default GptSearchPage;
