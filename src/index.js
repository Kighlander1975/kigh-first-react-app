import React from 'react';
import ReactDOM from 'react-dom/client';
import './App/index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Artikel(props) {
  return <div><h2>{props.name}</h2><p>Atrikeltext</p></div>
};

function formatName(n1, n2) {
    return n1 + " " + n2;
}

root.render(
  <React.StrictMode>
    <h1>Hallo</h1>
    <p>Test</p>
    <Artikel name="Wasser"/>
    <img src='https://lh3.googleusercontent.com/a/ACg8ocLYNylkO45Os1yFqKQaOjal86iyIXTpjTRBGV4mcpx4yvR0DlM2=s96-c' alt=""/>
    <p>Name: {formatName("Kai","Akkermann")}</p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
