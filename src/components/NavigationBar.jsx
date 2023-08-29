import { Outlet, Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const Layout = () => {
  return (
    <>
      <h1>Keep evolving your body</h1>

      <nav>
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

      <Outlet />
    </>
  );
};

export default Layout;
