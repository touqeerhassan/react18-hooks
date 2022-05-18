import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Touqeer");

  return (
    <React.Fragment>
      <h1>My name is {name}!</h1>
      <button onClick={() => setName("Hassan")}>Change name</button>
    </React.Fragment>
  );
}

export default App;
