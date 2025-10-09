// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App/App';
// import MyComponent from './App/MyComponent';
// import Greeting from './App/Greeting';
import Person from './App/Person';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Person name="Kai" age={49} occupation="WebDeveloper" />
    <Person name="Micaelá" age={33} occupation="Mediengestalterin" />
    <Person name="Yussuf" age={41} occupation="Senior Backend Developer" />
  </React.StrictMode>
);