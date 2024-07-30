import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Question from "./Question/Question.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Playback from "./Playback/Playback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/question",
    element: <Question></Question>,
  },
  {
    path: "/p",
    element: <Playback></Playback>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
