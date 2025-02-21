import { useState } from "react";
import React from "react";
import "./App.css";

function App() {

  const alienNumerals = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
  };

  const convertAlienNumeralToInt = (s) => {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
      let current = alienNumerals[s[i]];
      let next = alienNumerals[s[i + 1]];

      if (next && current < next) {
        total -= current; // ใช้หลักการลบ
      } else {
        total += current;
      }
    }
    return total;
  };

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (char) => {
    const newValue = input + char;
    setInput(newValue);
    setResult(convertAlienNumeralToInt(newValue));
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  return (
    <>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="p-10 border border-gray-200 bg-white shadow-lg  rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4">
              ระบบทำการกรอกเลข Alien numeral
            </h1>

            {/* Display Input */}
            <div className="border-none p-4 text-xl bg-gray-200 rounded-lg mb-4 min-h-[40px]">
              {input || "Enter numerals..."}
            </div>

            {/* Buttons for A, B, Z, L, C, D, R */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {["A", "B", "Z", "L", "C", "D", "R"].map((char) => (
                <button
                  key={char}
                  onClick={() => handleButtonClick(char)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-gray-700 transition cursor-pointer"
                >
                  {char}
                </button>
              ))}
            </div>

            {/* Clear Button */}
            <button
              onClick={handleClear}
              className="bg-red-500 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-red-700 transition cursor-pointer"
            >
              Clear
            </button>

            {result !== null && (
              <p className="mt-2 text-lg">
                ผลลัพธ์ของเลข : <strong>{result}</strong>
              </p>
            )}
          </div>
        </div>
    </>
  );
}

export default App;
