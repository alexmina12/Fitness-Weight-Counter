import "./App.css";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/NavigationBar.jsx";
import PersonalNotes from "./components/Notes";
import NewProgram from "./components/CreateProgram.jsx";
import Account from "./components/AccountPage";
import Login from "./components/LogIn";
import videoBg from "./assets/PageBackground.mp4";
import { ResponseProvider } from "./components/ResponseContext";
import { useState } from "react";

function App() {
  const [showVideo, setShowVideo] = useState(true);
  const toggleVideo = (value) => {
    setShowVideo(value);
  };
  return (
    <>
      <ResponseProvider>
        <BrowserRouter>
          <Layout />
          {showVideo && (
            <div className="background">
              <video src={videoBg} autoPlay muted loop />
            </div>
          )}
          <Routes>
            <Route index element={<HomePage toggleVideo={toggleVideo} />} />

            <Route path="/Notes" element={<PersonalNotes />} />
            <Route
              path="/NewNotes"
              element={<NewProgram toggleVideo={toggleVideo} />}
            />
            <Route path="/Account" element={<Account />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ResponseProvider>
    </>
  );
}

export default App;
