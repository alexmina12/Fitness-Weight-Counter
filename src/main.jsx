import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./components/HomePage.jsx";
import PersonalNotes from "./components/Notes.jsx";
import Account from "./components/AccountPage.jsx";
import NewProgram from "./components/CreateProgram.jsx";
import Login from "./components/LogIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Notes",
    element: <PersonalNotes />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
  {
    path: "/NewNotes",
    element: <NewProgram />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
