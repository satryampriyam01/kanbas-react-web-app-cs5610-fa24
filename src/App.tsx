import React from "react";
import "./App.css";
import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from "./Kanbas";
import SourceCode from "./SourceCode";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Sourcecode/*" element={<SourceCode />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
