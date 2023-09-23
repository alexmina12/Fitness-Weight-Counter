import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useResponseContext } from "./ResponseContext";

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  const { isAuthenticated, handleLogOut } = useResponseContext();
  const toggleNav = () => setShowNav(!showNav);

  return (
    <>
      <nav className="flex justify-between bg-black p-2 ">
        <h1 className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-lg p-1 mx-auto my-1 text-xl">
          Workout Chronicle
        </h1>
        {isAuthenticated ? (
          <button
            className="absolute bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-1 rounded-lg right-2"
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/Account">
              <button
                className="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 rounded-lg"
                onClick={toggleNav}
              >
                Register
              </button>
            </Link>
            <Link to="/Login">
              <button
                className="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 rounded-lg"
                onClick={toggleNav}
              >
                Login
              </button>
            </Link>
          </>
        )}
      </nav>

      <nav className="flex bg-zinc-800 p-1">
        <ul className="flex w-full justify-around m-auto items-center p-2">
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
      </nav>

      <div className="content"></div>
    </>
  );
};

export default Layout;
