import React from 'react';

const Table = () => {
  return (
    <div className="w-4/5 mx-auto my-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-black text-white">
            <th className="border border-gray-300 px-4 py-2">Letter</th>
            <th className="border border-gray-300 px-4 py-2">Words Count</th>
            <th className="border border-gray-300 px-4 py-2">Letter</th>
            <th className="border border-gray-300 px-4 py-2">Words Count</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['A', '7,296', 'N', '2,522'],
            ['B', '7,272', 'O', '3,681'],
            ['C', '11,382', 'P', '10,278'],
            ['D', '7,217', 'Q', '720'],
            ['E', '5,151', 'R', '6,794'],
            ['F', '5,389', 'S', '15,917'],
            ['G', '4,747', 'T', '7,289'],
            ['H', '4,500', 'U', '4,425'],
            ['I', '3,685', 'V', '2,364'],
            ['J', '1,287', 'W', '3,147'],
            ['K', '1,577', 'X', '122'],
            ['L', '4,126', 'Y', '608'],
            ['M', '6,891', 'Z', '624'],
          ].map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : ''}>
              {row.map((cell, i) => (
                <td key={i} className="border border-gray-300 px-4 py-2 text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan="2" className="font-bold text-center border border-gray-300 px-4 py-2">Total Words:</td>
            <td colSpan="2" className="font-bold text-center border border-gray-300 px-4 py-2">128,985</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;