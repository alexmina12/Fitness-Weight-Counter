import styles from "./HomePage.module.css";
// import * as Unicons from "@iconscout/react-unicons";

function HomePage() {
  return (
    <>
      <p className={styles.infoTitle}>News</p>
      {/* <Unicons.UilSignInAlt className={styles.login}></Unicons.UilSignInAlt> */}
      <div className={styles.info}>
        <div className={styles.topPart}>
          {" "}
          <div id="slide-0">
            <img src="https://mrolympia.com/sites/mrolympia.com/files/styles/original/public/2023-OLYMPIA-ROTATOR-1040x400.jpg?itok=B-96zw0P"></img>
          </div>
        </div>

        <div className={styles.bottomPart}></div>
      </div>
      <div className={styles.slideButtons}>
        <a href="#slide-0">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>
      </div>
      <div className={styles.slides}>
        <div id="slide-2">2</div>
        <div id="slide-3">3</div>
        <div id="slide-4">4</div>
        <div id="slide-5">10</div>
      </div>
      <hr></hr>
    </>
  );
}

export default HomePage;
