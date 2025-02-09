import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Home from "./pages/Home.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Genres from "./pages/Genres.tsx";
import MyReelRanks from "./pages/MyReelRanks.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/About",
        element: <About/>,
      },
      {
        path: "/Genres",
        element: <Genres />,
      },
      {
        path: "/HomePage",
        element: <Home />,
      },
      {
        path: "/HomePage",
        element: <HomePage/>,
      },
      {
        path: "/MyReelRanks",
        element: <MyReelRanks/>,
      },
      {
        path: "/UserProfile",
        element: <UserProfile/>,
      }
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
