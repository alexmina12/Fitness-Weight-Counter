import styles from "./Notes.module.css";

function PersonalNotes() {
  return (
    <>
      <table className={styles.table_Notes}>
        <tbody>
          <tr className={styles.table_Title}>
            <th>Exercitiu</th>
            <th>Numar serii</th>
            <th>Numar repetari</th>
            <th>Greutate</th>
          </tr>
          <tr className={styles.table_Data}>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PersonalNotes;
