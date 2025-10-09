// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskList } from "./App/TaskList";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Example() {

  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Du hast mich {count} Mal gedrückt.</p>
      <button onClick={() => setCount(count + 1)}>
        Drück mich!
      </button>
    </div>
  );
}

root.render(
    <React.StrictMode>
        <div style={{width: '90%', margin: '0 auto'}}>
          <h1>Aufgabenliste</h1>
            <TaskList done={true} aufgabe="Liste erstellt" />
            <TaskList aufgabe="Liste bearbeitet" />
        </div>
        <Example />
    </React.StrictMode>
);
