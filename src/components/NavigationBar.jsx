import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useResponseContext } from "./ResponseContext";
import * as RiIcons from "react-icons/ri";

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    if (windowWidth < 800) {
      setIsSidebarOpen(true);
    }
  }, [windowWidth]);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="flex h-12 sm:fixed sm:top-0 sm:w-full justify-between bg-gradient-to-r from-red-500 via-orange-500 pb-2 to-yellow-500 z-10">
        <div
          className={`text-white absolute my-2 xl:w-full h-[10%] ${
            isSidebarOpen ? "sm:z-20" : ""
          }`}
        >
          {windowWidth < 800 ? (
            <RiIcons.RiMenuLine
              className={`sm:fixed sm:my-1 sm:ml-4 sm:w-6 sm:h-6 ${
                isSidebarOpen ? "" : "sm:z-100"
              }`}
              onClick={toggleSidebar}
            />
          ) : (
            <div className="bg-zinc-800 p-1 xl:mt-11 ">
              <ul className="xl:flex xl:w-full justify-around items-center p-2">
                <li>
                  <Link to="/">
                    <button className="text-green-500 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <button className="text-green-500 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      About
                    </button>
                  </Link>
                </li>
                {isAuthenticated && (
                  <>
                    <li>
                      <Link to="/Notes">
                        <button className="text-green-500 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                          Current Done Workouts
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/NewNotes">
                        <button className="text-green-500 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                          Create Workout for Today
                        </button>
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/Help">
                    <button className="text-green-500 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      Help
                    </button>
                  </Link>
                </li>
              </ul>{" "}
            </div>
          )}
          <nav
            className={`xl:flex sm:fixed xl:relative w-fit bg-zinc-800 xl:-ml-24 p-1 -top-12 ${
              isSidebarOpen ? slideInLeft : slideOutLeft
            }`}
          >
            <div className="h-screen">
              <ul className="3xl:flex 3xl:w-full my-3 sm:mt-12 xl:h-screen space-y-2 px-2">
                <li className="w-4 text-red-600" onClick={toggleSidebar}>
                  X
                </li>
                <li>
                  <Link to="/">
                    <button className="text-green-500 bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <button className="text-green-500 bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      About
                    </button>
                  </Link>
                </li>
                {isAuthenticated && (
                  <>
                    <li>
                      <Link to="/Notes">
                        <button className="text-green-500 bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                          Current Done Workouts
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/NewNotes">
                        <button className="text-green-500 bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                          Create Workout for Today
                        </button>
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/Help">
                    <button className="text-green-500 bg-zinc-900 p-2 w-40 text-lg font-light rounded-lg filter brightness-110 hover:text-lime-500 cursor-pointer hover:filter brightness-300 hover:font-bold hover:letter-spacing-1 hover:bg-gray-900 hover:rounded-full">
                      Help
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <h1 className="text-white sm:fixed rounded-lg p-1 mx-auto my-1 text-xl sm:left-[50%] sm:translate-x-[-50%]">
          Workout Chronicle
        </h1>
        {isAuthenticated ? (
          <button
            className="xl:absolute sm:fixed my-2 content-center p-1 rounded-lg right-2"
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <>
            <div className="xl:absolute sm:fixed right-0 my-1 ">
              <Link to="/Account">
                <button
                  className="text-white mr-2 border border-black p-2 hover:bg-black"
                  onClick={toggleNav}
                >
                  Register
                </button>
              </Link>
              <Link to="/Login">
                <button
                  className="text-white mr-4 border border-black p-2 hover:bg-black"
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
