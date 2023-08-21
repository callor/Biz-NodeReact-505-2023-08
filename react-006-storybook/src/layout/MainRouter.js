import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import BucketContent from "../comps/BucketContent";
import BucketMain from "../comps/BucketMain";

const MainRouterProvider = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Navigate to="/bucket" /> },
    {
      path: "/bucket",
      element: <BucketMain />,
      children: [
        { path: "content/new", element: <h1>새로작성</h1> },
        { path: "content/:id", element: <BucketContent /> },
        { path: "content/:id/edit", element: <BucketContent /> },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
};
export default MainRouterProvider;
