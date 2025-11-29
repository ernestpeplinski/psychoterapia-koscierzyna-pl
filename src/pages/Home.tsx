import { Link } from "react-router-dom";
import "../styles/home.scss";
import { FaHeart, FaUsers, FaComments, FaPhone } from "react-icons/fa";
import profileImage from "../assets/images/magdalena-milewczyk.jpeg";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-content">
          <h1 className="home__hero-title">
            Profesjonalna psychoterapia
            <br />
            <span className="home__hero-highlight">w sercu Kościerzyny</span>
          </h1>
          <p className="home__hero-subtitle">
            Wspieram osoby w kryzysie psychicznym, pomagam odnaleźć równowagę i
            nowe możliwości rozwoju
          </p>
          <div className="home__hero-buttons">
            <Link
              to="/kontakt"
              className="home__hero-button home__hero-button--primary"
            >
              <FaPhone />
              <span>Umów konsultację</span>
            </Link>
            <Link
              to="/o-mnie"
              className="home__hero-button home__hero-button--secondary"
            >
              Poznaj mnie
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home__services">
        <div className="home__services-container">
          <h2 className="home__section-title">Czym się zajmuję?</h2>
          <div className="home__services-grid">
            <div className="home__service-card">
              <div className="home__service-icon">
                <FaHeart />
              </div>
              <h3 className="home__service-title">
                Psychoterapia indywidualna
              </h3>
              <p className="home__service-description">
                Terapia poznawczo-behawioralna dla osób dorosłych. Wsparcie w
                trudnych momentach życia, pracy nad sobą i rozwojem osobistym.
              </p>
            </div>

            <div className="home__service-card">
              <div className="home__service-icon">
                <FaUsers />
              </div>
              <h3 className="home__service-title">Interwencja kryzysowa</h3>
              <p className="home__service-description">
                Pomoc osobom znajdującym się w kryzysie psychicznym. Ponad 13
                lat doświadczenia w Punkcie Interwencji Kryzysowej.
              </p>
            </div>

            <div className="home__service-card">
              <div className="home__service-icon">
                <FaComments />
              </div>
              <h3 className="home__service-title">Warsztaty i konsultacje</h3>
              <p className="home__service-description">
                Warsztaty profilaktyczne dla młodzieży oraz warsztaty dla
                rodziców podnoszące kompetencje wychowawcze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="home__about">
        <div className="home__about-container">
          <div className="home__about-image">
            <img
              src={profileImage}
              alt="Magdalena Milewczyk - Psychoterapeuta"
            />
          </div>
          <div className="home__about-content">
            <h2 className="home__section-title">Magdalena Milewczyk</h2>
            <p className="home__about-description">
              Jestem pedagogiem, psychoterapeutą poznawczo-behawioralnym w
              trakcie szkolenia. Jestem członkiem Polskiego Towarzystwa Terapii
              Poznawczej i Behawioralnej im. Zdzisława Bizonia.
            </p>
            <p className="home__about-description">
              W pracy bliskie jest mi podejście terapii skoncentrowanej na
              rozwiązaniach, systemowej terapii rodzin oraz dialogu
              motywującego. Od 13 lat zawodowo zajmuję się wspieraniem osób
              znajdujących się w kryzysie psychicznym.
            </p>
            <Link to="/o-mnie" className="home__about-button">
              Dowiedz się więcej
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home__cta">
        <div className="home__cta-container">
          <h2 className="home__cta-title">Gotowa/y na zmianę?</h2>
          <p className="home__cta-description">
            Umów się na pierwszą konsultację i rozpocznij swoją drogę do
            lepszego samopoczucia
          </p>
          <div className="home__cta-buttons">
            <Link
              to="/kontakt"
              className="home__cta-button home__cta-button--primary"
            >
              <FaPhone />
              <span>Skontaktuj się</span>
            </Link>
            <Link
              to="/cennik"
              className="home__cta-button home__cta-button--secondary"
            >
              Zobacz cennik
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
