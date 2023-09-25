import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Main } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
