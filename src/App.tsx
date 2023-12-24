import { ReactElement } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";

function App(): ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
      </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
