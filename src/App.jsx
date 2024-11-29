import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PintuMasuk from "./pages/PintuMasuk";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pintu-masuk" element={<PintuMasuk />}></Route>
    </Routes>
  );
};

export default App;
