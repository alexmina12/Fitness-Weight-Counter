import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import { useResponseContext } from "./ResponseContext";

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  const { isAuthenticated, handleLogOut } = useResponseContext();
  const toggleNav = () => setShowNav(!showNav);

  return (
    <>
      <nav className={styles.main_nav}>
        <h1>Workout Chronicle</h1>
        {isAuthenticated ? (
          <button className={styles.login} onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/Account">
              <button className={styles.login} onClick={toggleNav}>
                Register
              </button>
            </Link>
            <Link to="/Login">
              <button className={styles.login} onClick={toggleNav}>
                Login
              </button>
            </Link>
          </>
        )}
      </nav>

      <nav className={styles.navigate}>
        <li className={styles.nav}>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li className={styles.nav}>
          <Link to="/About">
            <button>About</button>
          </Link>
        </li>
        {isAuthenticated && (
          <>
            <li className={styles.nav}>
              <Link to="/Notes">
                <button>Current Done Workouts</button>
              </Link>
            </li>
            <li className={styles.nav}>
              <Link to="/NewNotes">
                <button>Create Workout for Today</button>
              </Link>
            </li>
          </>
        )}
        <li className={styles.nav}>
          <Link to="/Help">
            <button>Help</button>
          </Link>
        </li>
      </nav>

      <div className={styles.content}></div>
    </>
  );
};

export default Layout;
