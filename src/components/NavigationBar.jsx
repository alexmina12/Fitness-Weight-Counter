import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useResponseContext } from "./ResponseContext";
import * as RiIcons from "react-icons/ri";

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isAuthenticated, handleLogOut } = useResponseContext();
  const toggleNav = () => setShowNav(!showNav);
  const slideInLeft =
    "transition-transform ease-in duration-1000 transform translate-x-0";
  const slideOutLeft =
    "transition-transform ease-out duration-1000 transform -translate-x-full";

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth) {
      setIsSidebarOpen(false);
    }
  }, [windowWidth]);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="flex h-12 sm:fixed sm:top-0 sm:w-full justify-between bg-gradient-to-r from-red-500 via-orange-500  to-yellow-500 z-10 items-center">
        <div
          className={`text-white absolute my-2 w-full h-[10%] ${
            isSidebarOpen ? "sm:z-20" : ""
          }`}
        >
          {windowWidth < 800 ? (
            <RiIcons.RiMenuLine
              className={`sm:fixed sm:ml-4 w-10 h-5 ${
                isSidebarOpen ? "" : "sm:z-100"
              }`}
              onClick={toggleSidebar}
            />
          ) : (
            <div className="bg-gradient-to-r from-red-500 via-orange-500 pb-2 to-yellow-500 p-1 mt-10 ">
              <ul className="flex w-full justify-around items-center mt-10 pt-2">
                <li>
                  <Link to="/">
                    <button className="text-white p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <button className="text-white p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      About
                    </button>
                  </Link>
                </li>
                {isAuthenticated && (
                  <>
                    <li>
                      <Link to="/Notes">
                        <button className="text-white p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                          Current Done Workouts
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/NewNotes">
                        <button className="text-white p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                          Create Workout for Today
                        </button>
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/Help">
                    <button className="text-white p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      Help
                    </button>
                  </Link>
                </li>
              </ul>{" "}
            </div>
          )}
          <nav
            className={`flex fixed relative w-fit bg-zinc-800 -ml-24 p-1 -top-12 ${
              isSidebarOpen ? slideInLeft : slideOutLeft
            }`}
          >
            <div className="h-screen mt-6">
              <ul className="3xl:flex 3xl:w-full h-[110%] space-y-2 px-2 sm:ml-24">
                <li className="w-4 text-red-600" onClick={toggleSidebar}>
                  X
                </li>
                <li>
                  <Link to="/">
                    <button className="text-white bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <button className="text-white bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      About
                    </button>
                  </Link>
                </li>
                {isAuthenticated && (
                  <>
                    <li>
                      <Link to="/Notes">
                        <button className="text-white bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                          Current Done Workouts
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/NewNotes">
                        <button className="text-white bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                          Create Workout for Today
                        </button>
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/Help">
                    <button className="text-white bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      Help
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <h1 className="flex relative text-white rounded-lg p-1 mx-auto my-1 text-2xl justify-center items-center">
          Workout Chronicle
        </h1>
        {isAuthenticated ? (
          <button
            className="absolute sm:fixed my-2 content-center p-1 rounded-lg right-2"
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <>
            <div className="xl:absolute sm:fixed right-0 my-1 ">
              <Link to="/Account">
                <button
                  className="text-white mr-2 border border-black p-2 hover:bg-black w-[80px] h-[40px]"
                  onClick={toggleNav}
                >
                  Register
                </button>
              </Link>
              <br />
              <Link to="/Login">
                <button
                  className="text-white border border-black p-2 hover:bg-black w-[80px] h-[40px]"
                  onClick={toggleNav}
                >
                  Login
                </button>
              </Link>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Layout;
