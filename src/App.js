import React from "react";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import ErrorPage from "./pages/Error/index";
import Signup from "./pages/Signup/index";
import Browse from "./pages/Browse";
import { PublicRoute, PrivateRoute } from "./auth/authRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import browseLoader from "./pages/Browse/browse-loader";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Home />
      </PublicRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },

  {
    path: "/browse",
    element: (
      <PrivateRoute>
        <Browse />
      </PrivateRoute>
    ),

    loader: browseLoader

  },
  {
    path: "signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  { path: "*", element: <ErrorPage /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
