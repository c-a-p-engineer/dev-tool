import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./app/views/pages/404";
import HomePage from "./app/views/pages/HomePage";
import JsonFormatPage from "./app/views/pages/JsonFormatPage";
import SqlFormatPage from "./app/views/pages/SqlFormatPage";
import UnixTimePage from "./app/views/pages/UnixTimePage";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/dev-tool/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/json-format" element={<JsonFormatPage />} />
          <Route path="/sql-format" element={<SqlFormatPage />} />
          <Route path="/unix-time" element={<UnixTimePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
