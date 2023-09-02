import styles from "./AccountPage.module.css";

function Account() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form1}>
          <div className={styles.form2}></div>
        </div>

        <form>
          <fieldset>
            <label>First Name:</label>
            <br />
            <input></input>
          </fieldset>
          <fieldset>
            <label>Last Name:</label>
            <br />
            <input></input>
          </fieldset>
          <fieldset>
            <label>Email:</label>
            <br />
            <input></input>
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <br />
            <input></input>
          </fieldset>
          <fieldset>
            <label>Confirm Password:</label>
            <br />
            <input></input>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Account;
