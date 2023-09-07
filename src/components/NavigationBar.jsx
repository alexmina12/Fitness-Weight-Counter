import { Outlet, Link, useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import React, { useState } from "react";

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();

  const toggleNav = () => setShowNav(!showNav);
  return (
    <>
      {showNav && (
        <nav className={styles.main_nav}>
          {/* <h1>Keep evolving your body</h1> */}
          <h1>Workout Chronicle</h1>
          <Link to="/Account">
            <button className={styles.login} onClick={toggleNav}>
              Sign In
            </button>
          </Link>
          <Link to="/Login">
            <button className={styles.login} onClick={toggleNav}>
              Login
            </button>
          </Link>
        </nav>
      )}

      {showNav && (
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
          <li className={styles.nav}>
            <Link to="/Help">
              <button>Help</button>
            </Link>
          </li>
        </nav>
      )}

      {/* Afișăm containerul pentru conținut */}
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
