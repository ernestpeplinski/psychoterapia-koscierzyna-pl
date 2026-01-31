import { Link } from "react-router-dom";
import "../styles/home.scss";
import { FaHeart, FaUsers, FaComments, FaPhone } from "react-icons/fa";
import profileImage from "../assets/images/profile-photo-2.webp";

function Home() {
  return (
    <div className="home">
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
            <h3 className="home__about-subtitle">Witaj, jestem Magda.</h3>
            <p className="home__about-description">
              Jestem pedagogiem i certyfikowanym psychoterapeutą poznawczo – behawioralnym. Towarzyszę osobom, które czują się przeciążone, zagubione lub stoją w ważnym momencie zmiany. Wierzę, że kiedy tworzymy bezpieczną przestrzeń do rozmowy i refleksji, łatwiej odzyskać poczucie wpływu, równowagi i lepszego kontaktu ze sobą.
            </p>
            <p className="home__about-description">
              Doświadczenia zawodowe i życiowe doprowadziły mnie do miejsca, w którym psychoterapia stała się świadomym wyborem i naturalnym rozwinięciem mojego zainteresowania człowiekiem i jego emocjami.
            </p>
            <p className="home__about-description">
              Jeśli czujesz, że to może być dobre miejsce na rozmowę — zapraszam Cię, by zajrzeć dalej.
            </p>
            <div className="home__about-buttons">
              <Link to="/o-mnie" className="home__about-button">
                Zajrzyj dalej
              </Link>
              <Link to="/kontakt" className="home__about-button home__about-button--primary">
                <FaPhone />
                <span>Umów konsultację</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home__services">
        <div className="home__services-container">
          <h2 className="home__section-title">Oferta</h2>
          <p className="home__services-intro">
            Pracuję z młodzieżą powyżej 13 r.ż. i z osobami dorosłymi.<br />
            Sesje odbywają się w gabinecie lub online po wcześniejszych ustaleniach.
          </p>
          <div className="home__services-grid">
            <div className="home__service-card">
              <div className="home__service-icon">
                <FaHeart />
              </div>
              <h3 className="home__service-title">Psychoterapia indywidualna</h3>
              <p className="home__service-description">
                Terapia zaburzeń nastroju, lękowych, obsesyjno – kompulsyjnych i innych.
              </p>
            </div>

            <div className="home__service-card">
              <div className="home__service-icon">
                <FaComments />
              </div>
              <h3 className="home__service-title">Wsparcie psychologiczne</h3>
              <p className="home__service-description">
                Dla osób w trudnych momentach życia, z problemami w relacjach, po stracie bliskich.
              </p>
            </div>

            <div className="home__service-card">
              <div className="home__service-icon">
                <FaUsers />
              </div>
              <h3 className="home__service-title">Interwencja Kryzysowa</h3>
              <p className="home__service-description">
                Pomoc osobom znajdującym się w kryzysie psychicznym spowodowanymi nagłymi zdarzeniami.
              </p>
            </div>

            <div className="home__service-card">
              <div className="home__service-icon">
                <FaComments />
              </div>
              <h3 className="home__service-title">Warsztaty i konsultacje</h3>
              <p className="home__service-description">
                Warsztaty profilaktyczne dla młodzieży, warsztaty dla rodziców podnoszące kompetencje wychowawcze, „Szkoła dla Rodziców”, warsztaty i konsultacje dla specjalistów i grup zawodowych zajmujących się pomaganiem.
              </p>
            </div>
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
