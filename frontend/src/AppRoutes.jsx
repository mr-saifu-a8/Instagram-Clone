import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from './features/auth/pages/Register';
import Loading from "./features/auth/components/Loading";

export const router = createBrowserRouter([
  {
    path: "/login",
  element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/",
    element: <h1>Welcome</h1>
  },
  {
    path: "/loading",
    element: <Loading/>
  }
])