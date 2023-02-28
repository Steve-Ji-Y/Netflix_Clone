import React from "react";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import ErrorPage from "./pages/Error/index";
import Signup from "./pages/Signup/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return (
    <AuthProider>
      <RouterProvider router={router} />
    </AuthProider>
  );
}

export default App;
