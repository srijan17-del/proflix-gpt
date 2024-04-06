import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";

const MovieList = ({ title, movies }) => {
  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div className="  pb-10 overflow-x-hidden">
        <h1 className="list-title text-white text-xl font-medium tracking-wider text-shadow-lg">
          {title}
        </h1>
        <div className="flex items-center">
          <MdChevronLeft
            id="sliderLeft"
            className="left-0 opacity-20 hover:opacity-100 cursor-pointer text-white absolute
             z-20 h-[14rem] hover:bg-gradient-to-r hover:from-black/50 duration-200"
            onClick={() => scroll(-1000)}
            size={"5rem"}
          />
          <div
            ref={ref}
            id="movie-container"
            className=" w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide flex
            overflow-y-hidden"
          >
            {movies?.map((cards) => (
              <MovieCard
                key={cards.id}
                cardsPoster={cards.poster_path}
              ></MovieCard>
            ))}
          </div>
          <MdChevronRight
            id="sliderRight"
            className="right-0 opacity-20 cursor-pointer hover:opacity-100 text-white absolute z-20 h-[14rem] hover:bg-gradient-to-l hover:from-black/50 duration-200"
            onClick={() => scroll(1000)}
            size={"5rem"}
          />
        </div>
      </div>
    </>
  );
};

export default MovieList;
