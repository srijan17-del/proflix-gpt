import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

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
