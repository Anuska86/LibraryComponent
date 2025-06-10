import React from "react";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <main>
      <title>Library Component</title>
      <div className="content">
        <Menu onOpen={() => console.log("Menu opened/closed")}></Menu>
      </div>
    </main>
  );
}

export default App;
