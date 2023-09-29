import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/main/index"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
