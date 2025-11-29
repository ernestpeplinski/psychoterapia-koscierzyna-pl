import { NavLink } from "react-router-dom";
import "../styles/header.scss";
import logo from "../assets/Logo 1.png";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__brand">
          <h1 className="header__title">Psychoterapia Kościerzyna</h1>
          <p className="header__subtitle">
            Psychoterapia i wsparcie <br />
            Magdalena Milewczyk
          </p>
        </div>
      </div>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Strona główna
        </NavLink>
        <NavLink
          to="/o-mnie"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          O mnie
        </NavLink>
        <NavLink
          to="/cennik"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cennik
        </NavLink>
        <NavLink
          to="/kontakt"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Kontakt
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
