import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by Laura Rahmati and is open-sourced on {""}
        <a
          href="https://github.com/Laux0/react-app-final-project"
          target="_blank"
          rel="noreferrer"
        >
          Github.
        </a>
      </footer>
    </div>
  );
}
