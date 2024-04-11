import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import GptSearchPage from "./GptSearchPage";

const Body = () => {
  // const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      // loader: useNowPlayingMovies,
    },
  ]);
  /** */

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Body;
