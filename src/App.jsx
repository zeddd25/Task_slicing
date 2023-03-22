import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Register from "./pages/Register";
import Tabel from "./pages/Tabel";
import TambahWisata from "./pages/TambahWisata";
import UbahWisata from "./pages/UbahWisata";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login passwordPlaceholder="Password" />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/tabel" element={<Tabel />}></Route>
          <Route path="/tambahwisata" element={<TambahWisata />}></Route>
          <Route path="/ubahwisata" element={<UbahWisata />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
