import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PintuMasuk from "./pages/PintuMasuk";
import MenujuJembatan from "./pages/MenujuJembatan";
import TengahJembatan from "./pages/TengahJembatan";
import SampingJembatan from "./pages/SampingJembatan";
import SetelahJembatan from "./pages/SetelahJembatan";
import Jalan from "./pages/Jalan";
import MenujuAirTerjun from "./pages/MenujuAirTerjun";
import AirTerjun from "./pages/AirTerjun";
import MenujuTamanHortensia from "./pages/MenujuTamanHortensia";
import TamanHortensia from "./pages/TamanHortensia";
import Lapangan from "./pages/Lapangan";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pintu-masuk" element={<PintuMasuk />}></Route>
      <Route path="/menuju-jembatan" element={<MenujuJembatan />}></Route>
      <Route path="/tengah-jembatan" element={<TengahJembatan />}></Route>
      <Route path="/samping-jembatan" element={<SampingJembatan />}></Route>
      <Route path="/setelah-jembatan" element={<SetelahJembatan />}></Route>
      <Route path="/jalan" element={<Jalan />}></Route>
      <Route path="/menuju-air-terjun" element={<MenujuAirTerjun />}></Route>
      <Route path="/air-terjun" element={<AirTerjun />}></Route>
      <Route
        path="/menuju-taman-hortensia"
        element={<MenujuTamanHortensia />}></Route>
      <Route path="/taman-hortensia" element={<TamanHortensia />}></Route>
      <Route path="/lapangan" element={<Lapangan />}></Route>
    </Routes>
  );
};

export default App;
