import "../styles/footer.scss";
import logo from "../assets/Logo 1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <div className="footer__brand-container">
            <div className="footer__logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="footer__brand-text">
              <h3>Psychoterapia Kościerzyna</h3>
              <p>Magdalena Milewczyk</p>
              <p>Profesjonalna psychoterapia i wsparcie</p>
            </div>
          </div>
        </div>

        <div className="footer__section">
          <h3>Adres</h3>
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
          <h3>Kontakt</h3>
          <p>
            Email:{" "}
            <a href="mailto:magdamil123@gmail.com">magdamil123@gmail.com</a>
          </p>
          <p>
            Tel: <a href="tel:+48517383811">517-383-811</a>
          </p>
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
