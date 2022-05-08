import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import F1Api from "./f1api/F1Api";
import TimeBoard from "./f1api/TimeBoard";
import TestFech from "./TestFech";

function App() {
  return (
    <>
      <TestFech />
      <div className="App">
        <h2>API</h2>
        <TimeBoard />
      </div>
    </>
  );
}

export default App;
