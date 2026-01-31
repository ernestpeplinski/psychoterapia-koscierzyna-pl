import "../styles/footer.scss";
import logo from "../assets/Logo Magdalena Milewczyk.png";
import partnerLogo from "../assets/images/centrum-pomocy-psychologicznej-koscierzyna-logo.png";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaHandshake,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <div className="footer__brand-container">
            <h3>Psychoterapia Kościerzyna</h3>
            <div className="footer__logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="footer__brand-text">
              <p>Magdalena Milewczyk</p>
              <p>Psychoterapia i wsparcie</p>
            </div>
          </div>
        </div>

        <div className="footer__section">
          <h3>
            <FaMapMarkerAlt className="footer__icon" />
            Adres
          </h3>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kościerzyna+ul.+Mickiewicza+18A+m3"
              target="_blank"
              rel="noopener noreferrer"
            >
              ul. Mickiewicza 18A m3
              <br />
              Kościerzyna
            </a>
          </p>
        </div>

        <div className="footer__section">
          <h3>
            <FaPhone className="footer__icon" />
            Kontakt
          </h3>
          <p>
            <FaEnvelope className="footer__icon footer__icon--inline" />
            <a href="mailto:magdamil123@gmail.com">magdamil123@gmail.com</a>
          </p>
          <p>
            <FaPhone className="footer__icon footer__icon--inline" />
            <a href="tel:+48517383811">517-383-811</a>
          </p>
        </div>

        <div className="footer__section footer__section--partner">
          <h3>
            <FaHandshake className="footer__icon" />
            Partnerzy
          </h3>
          <a
            href="https://psychologkoscierzyna.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__partner-link"
          >
            <img
              src={partnerLogo}
              alt="Centrum Pomocy Psychologicznej Kościerzyna"
              className="footer__partner-logo"
            />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; 2025 Psychoterapia Kościerzyna. Wszelkie prawa zastrzeżone.
        </p>
        <p>
          Strona stworzona przez{" "}
          <a
            href="https://ernestpeplinski.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ernest Pepliński
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
