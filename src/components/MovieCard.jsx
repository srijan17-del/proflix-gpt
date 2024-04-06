import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ cardsPoster }) => {
  return (
    <div className="mt-2 ">
      <img
        className=" h-56 min-w-48 pr-2 rounded shadow-lg hover:scale-125 ease-in-out duration-200  inline-block hover:min-h-max "
        src={IMG_CDN + cardsPoster}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
