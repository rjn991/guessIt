import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Question from "./Question/Question.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./Result/Result.jsx";
import Finish from "./Finish/Finish.jsx";
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
    path:"/result",
    element:<Result></Result>
  },
  {
    path:"/finish",
    element:<Finish></Finish>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
