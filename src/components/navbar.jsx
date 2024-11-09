import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/busquedas">Busquedas Actuales</Link>
      <Link to="/quienes-somos">Quienes Somos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};

export default Navbar;
