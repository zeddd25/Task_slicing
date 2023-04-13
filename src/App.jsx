import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Register from "./pages/Register";
import Tabel from "./pages/Tabel";
import TambahWisata from "./pages/TambahWisata";
import UpdateWisata from "./pages/UpdateWisata";

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
          <Route path="/tabel/:id" element={<Tabel />}></Route>
          <Route path="/tambahwisata" element={<TambahWisata />}></Route>
          <Route path="/updatewisata/:id" element={<UpdateWisata />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="*" element={<Notfound />}>``</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
