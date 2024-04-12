import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useState } from "react";

const VideoBg = ({ id, adult }) => {
  const [movieAudience, setMovieAudience] = useState("U/A");
  useMovieTrailer(id);
  const trailer = useSelector((store) => store.movie);
  if (!trailer.movieTrailer) return;

  const movieTrailer = trailer.movieTrailer;

  if (adult == true) {
    setMovieAudience("A");
  }

  return (
    <div className="w-full md:h-[130vh] h-[50vh] overflow-hidden">
      <iframe
        className="w-full md:aspect-video md:h-auto h-96 relative md:scale-y-[1.33] scale-y-[1.33] scale-x-125 "
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer.key +
          "?&autoplay=1&mute=1&controls=0&fs=0&loop=1&playlist=" +
          movieTrailer.key +
          "&rel=0&showinfo=0&disablekb=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="absolute right-0 md:top-[22rem] top-[17rem] bg-black/35 py-2 pl-2 md:pr-10 pr-5 border-l-2 border-white text-white">
        {movieAudience}
      </div>
    </div>
  );
};

export default VideoBg;
