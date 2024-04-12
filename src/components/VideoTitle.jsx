import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import ShowMoreText from "react-show-more-text";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="md:w-[30rem] w-auto left-7 md:top-[18rem] top-[14rem] absolute aspect-video  ">
      <h1 className="md:text-3xl text-2xl font-bold text-shadow-lg shadow-black/65 text-white">
        {title}
      </h1>
      <ShowMoreText
        lines={4}
        more="Show more"
        less="Show less"
        anchorClass="show-more-less-clickable"
        expanded={false}
        width={400}
        truncatedEndingComponent={"... "}
        className="hidden md:inline-block content-css text-[1.02rem] text-shadow-lg shadow-black/65 text-white font-medium cursor-pointer text-left "
      >
        <p className="hidden md:inline-block content-css text-[1.02rem] text-shadow-lg shadow-black/65 text-white font-medium cursor-pointer text-left ">
          {overview}
        </p>
      </ShowMoreText>
      <div className="flex gap-5 mt-4">
        <button className="w-auto md:h-auto md:px-8 px-3 py-2 md:text-lg bg-white font-medium flex gap-1 items-center rounded opacity-85 hover:bg-white/75 tracking-wide">
          <FaPlay />
          Play
        </button>
        <button className="w-auto md:h-auto md:px-8 px-3 py-2 md:text-lg bg-gray-500 font-medium flex gap-1 items-center rounded tracking-wide text-white hover:bg-slate-400 opacity-85">
          <IoIosInformationCircleOutline />
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
