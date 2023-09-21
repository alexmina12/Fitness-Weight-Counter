import { useEffect, useState } from "react";
import styles from "./CreateProgram.module.css";

function NewProgram({ toggleVideo }) {
  const [rowsData, setRowsData] = useState([]);
  const [numOfRows, setNumOfRows] = useState(0);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    toggleVideo(false);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("rowsData");
    if (savedData) {
      setRowsData(JSON.parse(savedData));
    }
  }, []);

  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("rowsData", JSON.stringify(data));
  };

  const addRows = () => {
    const newRows = [];
    const maxRows = 20;
    const totalRows = rowsData.length + newRows.length;
    const numOfRowsInt = parseInt(numOfRows);
    if (numOfRowsInt <= 0) {
      alert("Vă rugăm să introduceți un număr pozitiv pentru rânduri.");
      return;
    }
    if (totalRows <= maxRows) {
      for (let i = 0; i < numOfRows; i++) {
        newRows.push({
          NumarSerii: "",
          NumarRepetari: "",
          Greutate: "",
        });
      }
      const updatedRows = [...rowsData, ...newRows];
      setRowsData(updatedRows);
      saveDataToLocalStorage(updatedRows);
    } else {
      console.log(totalRows);
      alert(`Nu puteți crea mai mult de ${maxRows} linii.`);
    }
  };

  const deleteRows = (index) => {
    const updatedRows = [...rowsData];
    updatedRows.splice(index, 1);
    setRowsData(updatedRows);
    saveDataToLocalStorage(updatedRows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rowsData];
    updatedRows[index][name] = value;
    setRowsData(updatedRows);
    saveDataToLocalStorage(updatedRows);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => setShowInput(!showInput)}>
        {showInput ? "Ascunde Input-uri" : "Afișează Input-uri"}
      </button>
      {showInput && (
        <div className={styles.form}>
          <label>Inserează nume exercițiu</label>
          <input />
          <label>Inserează număr serii</label>
          <input
            type="number"
            value={numOfRows}
            onChange={(e) => setNumOfRows(e.target.value)}
            min="0"
          />
        </div>
      )}
      <div className={styles.headerContainer}>
        {showInput && (
          <button onClick={addRows} className={styles.create}>
            Create
          </button>
        )}
      </div>
      <table className={styles.table}>
        <tbody>
          {rowsData.map((rowData, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  name="NumarSerii"
                  value={rowData.NumarSerii}
                  onChange={(event) => handleChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="NumarRepetari"
                  value={rowData.NumarRepetari}
                  onChange={(event) => handleChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="number"
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
      {rowsData.length > 0 && (
        <button className={styles.save}>Save and export</button>
      )}
    </div>
  );
}

export default NewProgram;
