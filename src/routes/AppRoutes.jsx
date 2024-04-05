import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login/index_log.jsx";
import { Register } from "../pages/Register/index_cad.jsx";
import { Tool } from "../pages/Tool/index_lov.jsx";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tool" element={<Tool />} />
      </Routes>
    </BrowserRouter>
  );
}
