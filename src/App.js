import { useState } from "react";
import "./App.css";
import TableComponent from "./components/TableComponent";

function App() {
  const [length, setLength] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLength(parseInt(e.target.length.value));
  };
  return (
    <>
      <h1 className="text-center text-3xl py-5">
        Newspaper Problem with Linear Congruential generation
      </h1>
      <div className="text-center">
        by
        <a
          href="https://github.com/arfat-xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {" "}
          Arfatur Rahman
        </a>
      </div>
      <div className="w-96 m-0 m-auto my-5">
        <form className="text-center" onSubmit={handleSubmit}>
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="number"
              name="length"
              placeholder="Input a number"
            />
          </div>
          <input
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div
        style={{
          margin: "0 auto",
          width: "90%",
        }}
      >
        {length ? <TableComponent length={length} /> : ""}
      </div>
    </>
  );
}

export default App;
