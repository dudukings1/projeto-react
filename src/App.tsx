import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dash } from "./assets/components/Dash/dash";
import { Login } from "./assets/components/login/login";
import './index.css'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <Dash />
    }
  ]);

  return <RouterProvider router={router} />;
}
