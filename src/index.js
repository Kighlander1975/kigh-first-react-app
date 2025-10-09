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
            
            <TaskList 
                aufgabe="Liste erstellt" 
                description="Die Aufgabenliste wurde erfolgreich erstellt und ist nun einsatzbereit."
            />
            
            <TaskList 
                aufgabe="Liste bearbeitet" 
                description="Füge neue Funktionen hinzu: Beschreibung anzeigen und Checkbox-Funktionalität."
            />
            
            <TaskList 
                aufgabe="Dokumentation schreiben" 
                description="Erstelle eine ausführliche Dokumentation für das Projekt."
            />
            
            <TaskList 
                aufgabe="Tests durchführen" 
                description="Führe umfassende Tests durch, um sicherzustellen, dass alles funktioniert."
            />
        </div>
    </React.StrictMode>
);