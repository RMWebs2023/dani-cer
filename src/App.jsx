import Home from "./pages/home";
import Offers from "./pages/offers";
import Services from "./pages/services";
import Info from "./pages/info";
import Contact from "./pages/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/busquedas" element={<Offers />} />
        <Route path="/quienes-somos" element={<Info />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}