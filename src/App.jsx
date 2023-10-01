import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/main/index";
import Information from "./page/information/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/inf" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
