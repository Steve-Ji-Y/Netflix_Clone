import React from "react";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index"
// import ErrorPage from "./pages/Error/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,

  },
  { path: "/login", element: <Login /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
