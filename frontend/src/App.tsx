import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import JsonFormatPage from "./components/pages/JsonFormatPage";
import SqlFormatPage from "./components/pages/SqlFormatPage";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/json-format" element={<JsonFormatPage />} />
          <Route path="/sql-format" element={<SqlFormatPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
