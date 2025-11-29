import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/o-mnie">O mnie</NavLink>
        <NavLink to="/cennik">Cennik</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </nav>
    </header>
  );
}

export default Header;
