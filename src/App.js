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
      <h1 style={{ textAlign: "center" }}>Arfatur RAhman</h1>
      <form
        style={{ textAlign: "center", marginBottom: "20px" }}
        onSubmit={handleSubmit}
      >
        <input type="number" name="length" id="" />
        <input type="submit" value="Submit" />
      </form>
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
