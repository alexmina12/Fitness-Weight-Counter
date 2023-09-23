import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="relative flex">
      <div className="w-56 h-56 flex flex-col items-center justify-center border-violet-500 border-2">
        <button
          onClick={() => setShowInput(!showInput)}
          className="w-14 h-14 bg-green-600 rounded-full text-white"
        >
          +{showInput}
        </button>
        <p className=" text-red-800">Add Exercices</p>
      </div>
      {showInput && (
        <div className="relative w-fit flex flex-col bg-gray-900 text-white p-4 rounded-lg space-y-2 ">
          <label htmlFor="exerciseName">Inserează nume exercițiu</label>
          <input
            type="text"
            id="exerciseName"
            name="exerciseName"
            className="bg-transparent text-white w-40"
          />
          <label htmlFor="series">Inserează număr serii</label>
          <input
            type="number"
            id="series"
            name="series"
            value={numOfRows}
            onChange={(e) => setNumOfRows(e.target.value)}
            min="0"
            className="bg-transparent text-white w-40"
          />
          <button
            onClick={addRows}
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-32"
          >
            Create
          </button>
        </div>
      )}
      <div className="relative w-fit container mx-auto">
        <table className="left-[50%] translate-x-[10%] m-auto table-fixed mt-8 mx-auto">
          <thead>
            <tr>
              <th className="w-[40%] py-1 text-center font-bold border border-gray-400 bg-gray-600 text-green-400">
                Numar Repetari
              </th>
              <th className="w-[40%] py-1 text-center font-bold border border-gray-400 bg-gray-600 text-green-400">
                Greutate
              </th>
            </tr>
          </thead>
          <tbody>
            {rowsData.map((rowData, index) => (
              <tr className="h-10" key={index}>
                <td className="border border-gray-400">
                  <input
                    type="number"
                    name="NumarRepetari"
                    value={rowData.NumarRepetari}
                    onChange={(event) => handleChange(index, event)}
                    className="w-[90%] mx-6 bg-transparent text-white text-center focus:outline-none"
                  />
                </td>
                <td className="border border-gray-400">
                  <input
                    type="number"
                    name="Greutate"
                    value={rowData.Greutate}
                    onChange={(event) => handleChange(index, event)}
                    className="w-[90%] mx-6 bg-transparent text-white text-center"
                  />
                </td>
                <td>
                  <button
                    onClick={() => deleteRows(index)}
                    className="mx-4 right-0 bg-red-600 text-white rounded-md px-2"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rowsData.length > 0 && (
          <button className="bg-orange-500 block mx-auto mt-4 px-4 py-2 rounded-md text-white">
            Save and export
          </button>
        )}
      </div>
    </div>
  );
}

export default NewProgram;
