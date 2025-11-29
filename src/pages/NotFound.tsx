import { Link } from "react-router-dom";
import "../styles/notFound.scss";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__icon">
          <FaExclamationTriangle />
        </div>
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Strona nie została znaleziona</h2>
        <p className="not-found__description">
          Przepraszamy, ale strona której szukasz nie istnieje.
        </p>
        <Link to="/" className="not-found__button">
          <FaHome />
          <span>Wróć do strony głównej</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
