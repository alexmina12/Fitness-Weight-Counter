import React, { useState } from "react";
import { useSidebar } from "./ResponseContext";
import edit from "./../assets/Edit.png";
import menu from "./../assets/Menu.png";
import trash from "./../assets/Trash.png";

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
      setNumbers: [],
    };

    for (let i = 0; i < numOfRows; i++) {
      newTable.rowsData.push({
        NrReps: "",
        Weight: "",
      });
      newTable.setNumbers.push(i + 1);
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
    if (tables[tableIndex].isEditing) {
      return;
    }
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
      <div className="relative xl:mt-24 my-16 grid xl:grid-cols-2 sm:grid-cols-1 sm:gap-8 w-[90%] mx-auto">
        {tables.map((table, tableIndex) => (
          <div
            key={tableIndex}
            className="xl:mt-8 sm:mt-2 border-2 rounded-2xl border-zinc-600 mx-auto w-[80%] p-2"
          >
            <table
              className={`relative xl:mx-0 sm:mx-auto table-fixed mt-2 ${
                isSidebarOpen ? "z-15" : ""
              } ${table.isEditing ? "" : "sm:table-fixed"}`}
            >
              <thead>
                <tr>
                  <th
                    colSpan="3"
                    className="w-auto py-1 text-center font-bold text-green-400"
                  ></th>
                </tr>
                <tr className="bg-[#e6e6e6]">
                  <th className="p-2">{table.exerciseName}</th>
                  <th>Set</th>
                  <th>Reps</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {table.rowsData.map((rowData, rowIndex) => (
                  <>
                    <tr
                      key={rowIndex}
                      className="bg-[#e6e6e6] border-[10px] border-darker-purple"
                    >
                      <td className="flex w-full h-fit my-2">
                        <div className="flex w-full h-9">
                          <button onClick={() => toggleEdit(tableIndex)}>
                            <img
                              src={edit}
                              className={`relative bottom-1 ${
                                table.isEditing ? "" : "bg-blue-600"
                              }`}
                            />
                          </button>
                          <button>
                            <img src={menu} className="relative right-1" />
                          </button>
                          <button
                            onClick={() => deleteRow(tableIndex, rowIndex)}
                          >
                            <img src={trash} />
                          </button>
                        </div>
                      </td>
                      <td className="w-[25%]">
                        <p className="text-center">
                          {table.setNumbers[rowIndex]}
                        </p>
                      </td>
                      <td className="w-[25%]">
                        <input
                          type="number"
                          name="NrReps"
                          value={rowData.NrReps}
                          onChange={(event) =>
                            handleChange(tableIndex, rowIndex, event)
                          }
                          className={`{flex w-full bg-[#e6e6e6] text-center focus:outline-none text-[24px]  ${
                            isSidebarOpen ? "z-15 " : "flex mx-auto"
                          }`}
                        />
                      </td>
                      <td className="w-[25%]">
                        <input
                          type="number"
                          name="Weight"
                          value={rowData.Weight}
                          onChange={(event) =>
                            handleChange(tableIndex, rowIndex, event)
                          }
                          className="flex w-full bg-[#e6e6e6] text-center focus:outline-none text-[24px]"
                        />
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <div className="w-full h-40 relative flex my-auto">
          <button
            onClick={() => setShowInput(!showInput)}
            className="bg-green-600 hover:bg-green-800 mx-auto my-auto sm:w-20 sm:h-20 text-white xl:w-24 xl:h-24 rounded-full"
          >
            Add New Table{showInput}
          </button>
          {showInput && (
            <div
              className={`absolute w-56 h-52 border-2 border-violet-500 bg-gray-900 text-white p-4 rounded-lg space-y-2 z-10 left-[50%] translate-x-[-50%] ${
                tables.length > 0 ? "bottom-0" : ""
              }`}
            >
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
              <div className="flex gap-2">
                <button
                  onClick={() => setShowInput(false)}
                  className="bg-blue-500  rounded-md px-4 py-2 w-[92px]"
                >
                  Cancel
                </button>
                <button
                  onClick={createTable}
                  className="bg-blue-500 text-white rounded-md px-4 py-2 w-[92px]"
                >
                  Create
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className=" bg-orange-500 hover:bg-orange-800 block mx-auto  px-1 py-0.5 rounded-md text-white text-base whitespace-normal">
        Save and export
      </button>
    </>
  );
}

export default NewProgram;
