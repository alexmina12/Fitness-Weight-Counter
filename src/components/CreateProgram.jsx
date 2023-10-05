import React, { useState } from "react";
import { useSidebar } from "./ResponseContext";

function NewProgram() {
  const [tables, setTables] = useState([]);
  const [numOfRows, setNumOfRows] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [exerciseName, setExerciseName] = useState("");
  const { isSidebarOpen } = useSidebar();

  const createTable = () => {
    if (!exerciseName.trim()) {
      alert("Vă rugăm să introduceți un nume de exercițiu.");
      return;
    }

    const newTable = {
      exerciseName: exerciseName,
      rowsData: [],
      isEditing: true,
    };

    for (let i = 0; i < numOfRows; i++) {
      newTable.rowsData.push({
        NumarRepetari: "",
        Greutate: "",
      });
    }

    if (newTable.rowsData.length > 20) {
      alert("Nu puteți crea mai mult de 20 de linii pentru acest tabel.");
      return;
    }

    setTables([...tables, newTable]);
    setShowInput(false);
    setExerciseName("");
    setNumOfRows(0);
  };

  const deleteTable = (index) => {
    const updatedTables = [...tables];
    updatedTables.splice(index, 1);
    setTables(updatedTables);
  };

  const deleteRow = (tableIndex, rowIndex) => {
    const updatedTables = [...tables];
    updatedTables[tableIndex].rowsData.splice(rowIndex, 1);
    setTables(updatedTables);
  };

  const handleChange = (tableIndex, rowIndex, event) => {
    const { name, value } = event.target;
    const updatedTables = [...tables];
    updatedTables[tableIndex].rowsData[rowIndex][name] = value;
    setTables(updatedTables);
  };

  const toggleEdit = (tableIndex) => {
    const updatedTables = [...tables];
    updatedTables[tableIndex].isEditing = !updatedTables[tableIndex].isEditing;
    setTables(updatedTables);
  };

  return (
    <>
      {showInput && (
        <div className="absolute w-56 h-56 border-2 border-violet-500 bg-gray-900 text-white p-4 rounded-lg space-y-2 z-10">
          <button
            onClick={() => setShowInput(false)}
            className="absolute right-2 top-2 text-white"
          >
            X
          </button>
          <label htmlFor="exerciseName">Inserează nume exercițiu</label>
          <input
            type="text"
            id="exerciseName"
            name="exerciseName"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
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
            onClick={createTable}
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-32"
          >
            Create
          </button>
        </div>
      )}
      <div className="relative xl+:mt-24 mt-10 grid w-full xl+:grid-cols-4 xl+:gap-4 sm:gap-8">
        {tables.map((table, tableIndex) => (
          <div key={tableIndex}>
            <button
              className="text-white"
              onClick={() => toggleEdit(tableIndex)}
            >
              {!table.isEditing ? "Cancel" : "Modifica"}
            </button>
            <table
              className={`relative xl+:mx-10 sm:ml-2 table-fixed mt-2${
                isSidebarOpen ? "z-15" : ""
              }`}
            >
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="w-auto py-1 text-center font-bold border border-gray-400 bg-gray-600 text-green-400"
                  >
                    {table.exerciseName}
                  </th>
                  <th>
                    <button
                      onClick={() => deleteTable(tableIndex)}
                      className={`mx-4 xl+:px-2 sm:px-1 right-0 bg-red-600 text-white rounded-md ${
                        table.isEditing ? "hidden" : ""
                      }`}
                    >
                      X
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.rowsData.map((rowData, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border border-gray-400  sm:h-20">
                      <input
                        type="number"
                        name="NumarRepetari"
                        value={rowData.NumarRepetari}
                        onChange={(event) =>
                          handleChange(tableIndex, rowIndex, event)
                        }
                        className={`{flex mx-auto w-full bg-transparent text-white text-center focus:outline-none sm:h-10 ${
                          isSidebarOpen ? "z-15" : ""
                        }`}
                      />
                    </td>
                    <td className="border border-gray-400 sm:h-20">
                      <input
                        type="number"
                        name="Greutate"
                        value={rowData.Greutate}
                        onChange={(event) =>
                          handleChange(tableIndex, rowIndex, event)
                        }
                        className="flex mx-auto w-full bg-transparent text-white text-center focus:outline-none sm:h-10"
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => deleteRow(tableIndex, rowIndex)}
                        className={`mx-4 xl+:px-2  sm:px-1 right-0 bg-red-600 text-white rounded-md ${
                          table.isEditing ? "hidden" : ""
                        }`}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {table.rowsData.length > 0 && (
              <button className=" bg-orange-500 block sm:mx-auto xl+:ml-[25%] mt-4 px-1 py-0.5 rounded-md text-white text-base whitespace-normal">
                Save and export
              </button>
            )}
          </div>
        ))}
        <div className="w-full  mb-10">
          <button
            onClick={() => setShowInput(!showInput)}
            className="relative flex bg-green-600 xl+:ml-[30%] sm:mx-auto sm:mt-10 sm:w-20 sm:h-20  text-white xl+:w-24 xl+:h-24 rounded-full items-center"
          >
            Add New Table{showInput}
          </button>
        </div>
      </div>
    </>
  );
}

export default NewProgram;
