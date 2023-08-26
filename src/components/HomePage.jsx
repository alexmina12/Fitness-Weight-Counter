import styles from "./HomePage.module.css";
import * as Unicons from "@iconscout/react-unicons";

function HomePage() {
  return (
    <>
      <p className={styles.infoTitle}>News</p>
      <Unicons.UilSignInAlt className={styles.login}></Unicons.UilSignInAlt>
      <div className={styles.info}>
        <div className={styles.leftPart}>Stanga</div>
        <div className={styles.rightTopPart}>Dreapta sus</div>
        <div className={styles.rightBottomPart}>Dreapta jos</div>
      </div>
      <hr></hr>
    </>
  );
}

export default HomePage;
