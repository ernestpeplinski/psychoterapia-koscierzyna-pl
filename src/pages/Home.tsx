import { Link } from "react-router-dom";
import "../styles/home.scss";
import { FaHeart, FaUsers, FaComments, FaPhone } from "react-icons/fa";
import profileImage from "../assets/images/magdalena-milewczyk.jpeg";

function Home() {
  return (
    <div className="home">
      {/* Hero Section with Quote */}
      <section className="home__hero">
        <div className="home__lead-quote-content">
          <blockquote className="home__lead-quote-block" aria-label="Cytat">
            <p>
              „Możemy nie być odpowiedzialni za świat, który stworzył nasze umysły,
              <br />
              ale możemy wziąć odpowiedzialność za umysł, którym tworzymy nasz świat”.
            </p>
            <footer>— <cite>Gabor Maté</cite></footer>
          </blockquote>
        </div>
        <div className="home__hero-content">
          <h1 className="home__hero-title">
            <span className="home__hero-highlight">Witaj, jestem Magda.</span>
          </h1>
          <p className="home__hero-subtitle">
            Towarzyszę osobom, które chcą lepiej rozumieć swoje myśli, emocje i reakcje w obliczu trudnych doświadczeń.
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
              Towarzyszę osobom, które czują się przeciążone, zagubione lub stoją w ważnym momencie zmiany. Wierzę, że kiedy tworzymy bezpieczną przestrzeń do rozmowy i refleksji, łatwiej odzyskać poczucie wpływu, równowagi i lepszego kontaktu ze sobą.
            </p>
            <p className="home__about-description">
              Lubię myśleć o terapii jako o spotkaniu — spokojnym, uważnym i opartym na zaufaniu.
            </p>
            <p className="home__about-description">
              Jeśli czujesz, że to może być dobre miejsce na rozmowę — zapraszam Cię, by zajrzeć dalej.
            </p>
            <Link to="/o-mnie" className="home__about-button">
              Zajrzyj dalej
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
