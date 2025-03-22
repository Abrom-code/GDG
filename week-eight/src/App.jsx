import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./pages/Root";
import MoviePage from "./pages/Movie";
import WatchList from "./pages/WatchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MoviePage /> },
      { path: "/watchlist", element: <WatchList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
