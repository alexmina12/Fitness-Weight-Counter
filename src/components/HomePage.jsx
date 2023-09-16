import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.card_main}>
        <div className={styles.card_second}>
          <div className={styles.line}></div>
          <div className={styles.line}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
              <path d="M0,50 C100,0 300,100 400,50" />
            </svg>
          </div>
          <div className={styles.card_info}></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
