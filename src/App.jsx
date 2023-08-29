import "./App.css";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/NavigationBar.jsx";
import PersonalNotes from "./components/Notes";
import NewProgram from "./components/CreateProgram.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Notes" element={<PersonalNotes />} />
        <Route path="/NewNotes" element={<NewProgram />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
