import React from "react";

function PersonalNotes() {
  return (
    <>
      <table className="border-collapse w-90 mx-auto text-cyan">
        <tbody>
          <tr className="bg-gray-400">
            <th className="bg-gray-700 border border-gray-400 p-2 text-center w-1/4">
              Exercitiu
            </th>
            <th className="bg-gray-700 border border-gray-400 p-2 text-center w-1/4">
              Numar serii
            </th>
            <th className="bg-gray-700 border border-gray-400 p-2 text-center w-1/4">
              Numar repetari
            </th>
            <th className="bg-gray-700 border border-gray-400 p-2 text-center w-1/4">
              Greutate
            </th>
          </tr>
          <tr className="bg-gray-400">
            <td className="border border-gray-400 p-2 text-center">1</td>
            <td className="border border-gray-400 p-2 text-center">2</td>
            <td className="border border-gray-400 p-2 text-center">3</td>
            <td className="border border-gray-400 p-2 text-center">4</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PersonalNotes;
