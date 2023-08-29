import { useState } from "react";
import styles from "./CreateProgram.module.css";

function NewProgram() {
  const [rowsData, setRowsData] = useState([]);

  const addRows = () => {
    const newRow = {
      Exercitiu: "",
      NumarSerii: "",
      NumarRepetari: "",
      Greutate: "",
    };
    setRowsData([...rowsData, newRow]);
  };

  const deleteRows = (index) => {
    const updatedRows = [...rowsData];
    updatedRows.splice(index, 1);
    setRowsData(updatedRows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rowsData];
    updatedRows[index][name] = value;
    setRowsData(updatedRows);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: "100px" }}>Exercitiu</th>
              <th style={{ width: "100px" }}>Numar Serii</th>
              <th style={{ width: "100px" }}>Numar Repetari</th>
              <th style={{ width: "100px" }}>Greutate</th>
              <th colSpan="4" className={styles.button}>
                {" "}
                <button onClick={addRows} className={styles.create}>
                  Create
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <table className={styles.table}>
        <tbody>
          {rowsData.map((rowData, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="Exercitiu"
                  value={rowData.Exercitiu}
                  onChange={(event) => handleChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="NumarSerii"
                  value={rowData.NumarSerii}
                  onChange={(event) => handleChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="NumarRepetari"
                  value={rowData.NumarRepetari}
                  onChange={(event) => handleChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="Greutate"
                  value={rowData.Greutate}
                  onChange={(event) => handleChange(index, event)}
                />
              </td>
              <td className={styles.buttonRemove}>
                <button
                  onClick={() => deleteRows(index)}
                  className={styles.remove}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewProgram;
