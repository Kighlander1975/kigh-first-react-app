// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskList } from "./App/TaskList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <div style={{width: '90%', margin: '0 auto'}}>
          <h1>Aufgabenliste</h1>
            <TaskList done={true} aufgabe="Liste erstellt" />
            <TaskList aufgabe="Liste bearbeitet" />
        </div>
    </React.StrictMode>
);
