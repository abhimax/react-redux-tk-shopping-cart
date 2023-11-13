import Home from "./components/Home";
import Cart from "./components/Cart";
import "./styles/index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="container main">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
