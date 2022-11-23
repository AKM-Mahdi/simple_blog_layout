import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import SinglePage from "../Components/SinglePage/SinglePage";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/:id",
        element: <SinglePage></SinglePage>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      },
    ],
  },
]);
