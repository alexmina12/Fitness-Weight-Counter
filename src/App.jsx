import "./App.css";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/NavigationBar.jsx";
import PersonalNotes from "./components/Notes";
import NewProgram from "./components/CreateProgram.jsx";
import Account from "./components/AccountPage";
import Login from "./components/LogIn";
import {
  ResponseProvider,
  SidebarProvider,
} from "./components/ResponseContext";

function App() {
  return (
    <>
      <ResponseProvider>
        <SidebarProvider>
          <BrowserRouter>
            <Layout />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/Notes" element={<PersonalNotes />} />
              <Route path="/NewNotes" element={<NewProgram />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </SidebarProvider>
      </ResponseProvider>
    </>
  );
}

export default App;
