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
    } else {
      setIsSidebarOpen(false);
    }
  }, [windowWidth]);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="flex justify-between bg-black p-2 xl+:-ml-2">
        <div
          className={`text-white absolute my-2 xl+:w-full h-[10%] ${
            isSidebarOpen ? "sm:z-20" : ""
          }`}
        >
          {windowWidth < 800 ? (
            <RiIcons.RiMenuLine
              className={`sm:relative sm:my-2 ${
                isSidebarOpen ? "" : "sm:z-100"
              }`}
              onClick={toggleSidebar}
            />
          ) : (
            <div className="bg-zinc-800 p-1 xl+:mt-12 ">
              <ul className="xl+:flex xl+:w-full  justify-around items-center p-2">
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
              </ul>{" "}
            </div>
          )}
          <nav
            className={`flex relative w-fit bg-zinc-800 -ml-2 p-1 -top-12 ${
              isSidebarOpen ? slideInLeft : slideOutLeft
            }`}
          >
            <div className="h-screen">
              <ul className="3xl:flex 3xl:w-full my-3 h-screen space-y-2 px-2">
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
        <h1 className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-lg p-1 mx-auto my-1 text-xl">
          Workout Chronicle
        </h1>
        {isAuthenticated ? (
          <button
            className="absolute my-2 bg-gradient-to-r content-center from-red-600 via-orange-500 to-yellow-500 p-1 rounded-lg right-2"
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/Account">
              <button
                className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 rounded-lg right-16"
                onClick={toggleNav}
              >
                Register
              </button>
            </Link>
            <Link to="/Login">
              <button
                className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 rounded-lg right-2"
                onClick={toggleNav}
              >
                Login
              </button>
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Layout;
