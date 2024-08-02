import { createBrowserRouter } from "react-router-dom";

import Cart from "./components/Cart";
import Home from "./components/Home";
import MainLayout from "./Layout/MainLayout";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
