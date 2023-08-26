import "./App.css";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/NavigationBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout />

      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
