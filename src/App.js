import * as React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ComponentTesting from "./Component_Testing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ComponentTesting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
