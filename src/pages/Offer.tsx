import "../styles/offer.scss";
import { FaHeart, FaUsers, FaComments, FaHandsHelping } from "react-icons/fa";

function Offer() {
  return (
    <div className="offer">
      <div className="offer__container">
        <h1 className="offer__title">Oferta</h1>
        
        <p className="offer__intro">
          Pracuję z{'\u00A0'}młodzieżą powyżej 13 r.ż. i{'\u00A0'}z{'\u00A0'}osobami dorosłymi.<br />
          Sesje odbywają się w{'\u00A0'}gabinecie lub online po{'\u00A0'}wcześniejszych ustaleniach.
        </p>

        <div className="offer__services-grid">
          <div className="offer__service-card">
            <div className="offer__service-icon">
              <FaHeart />
            </div>
            <h3 className="offer__service-title">Psychoterapia indywidualna</h3>
            <p className="offer__service-description">
              Terapia zaburzeń nastroju, lękowych, obsesyjno – kompulsyjnych i{'\u00A0'}innych.
            </p>
          </div>

          <div className="offer__service-card">
            <div className="offer__service-icon">
              <FaComments />
            </div>
            <h3 className="offer__service-title">Wsparcie psychologiczne</h3>
            <p className="offer__service-description">
              Dla osób w{'\u00A0'}trudnych momentach życia, z{'\u00A0'}problemami w{'\u00A0'}relacjach, po{'\u00A0'}stracie bliskich.
            </p>
          </div>

          <div className="offer__service-card">
            <div className="offer__service-icon">
              <FaUsers />
            </div>
            <h3 className="offer__service-title">Interwencja Kryzysowa</h3>
            <p className="offer__service-description">
              Pomoc osobom znajdującym się w{'\u00A0'}kryzysie psychicznym spowodowanym nagłymi zdarzeniami.
            </p>
          </div>

          <div className="offer__service-card">
            <div className="offer__service-icon">
              <FaHandsHelping />
            </div>
            <h3 className="offer__service-title">Warsztaty i{'\u00A0'}konsultacje</h3>
            <p className="offer__service-description">
              Warsztaty profilaktyczne dla młodzieży, warsztaty dla rodziców podnoszące kompetencje wychowawcze, „Szkoła dla Rodziców", warsztaty i{'\u00A0'}konsultacje dla specjalistów i{'\u00A0'}grup zawodowych zajmujących się pomaganiem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
