import "../styles/pricing.scss";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing__container">
        <h1 className="pricing__title">Cennik</h1>

        <div className="pricing__cards">
          <div className="pricing__card pricing__card--featured">
            <div className="pricing__card-header">
              <h2 className="pricing__card-title">Pierwsza konsultacja</h2>
              <div className="pricing__card-price">
                <span className="pricing__card-amount">230 zł</span>
                <span className="pricing__card-duration">70 min</span>
              </div>
            </div>
            <div className="pricing__card-body">
              <p className="pricing__card-description">
                Sesja diagnostyczna pozwalająca na poznanie Twojej sytuacji i
                ustalenie kierunku terapii.
              </p>
            </div>
          </div>

          <div className="pricing__card">
            <div className="pricing__card-header">
              <h2 className="pricing__card-title">Kolejna sesja</h2>
              <div className="pricing__card-price">
                <span className="pricing__card-amount">200 zł</span>
                <span className="pricing__card-duration">50 min</span>
              </div>
            </div>
            <div className="pricing__card-body">
              <p className="pricing__card-description">
                Regularna sesja terapeutyczna prowadzona zgodnie z ustalonym
                planem.
              </p>
            </div>
          </div>

          <div className="pricing__card pricing__card--custom">
            <div className="pricing__card-header">
              <h2 className="pricing__card-title">Inne zlecenia</h2>
              <div className="pricing__card-price">
                <span className="pricing__card-amount">Indywidualnie</span>
              </div>
            </div>
            <div className="pricing__card-body">
              <p className="pricing__card-description">
                Warsztaty, konsultacje dla rodziców oraz inne formy wsparcia
                według indywidualnej wyceny.
              </p>
            </div>
          </div>
        </div>

        <div className="pricing__info">
          <h2 className="pricing__info-title">Informacje praktyczne</h2>
          <ul className="pricing__info-list">
            <li>
              Sesje odbywają się w{" "}
              <Link to="/kontakt">gabinecie w Kościerzynie</Link>{" "}
              lub online po wcześniejszych ustaleniach
            </li>
            <li>
              Możliwość{" "}
              <Link to="/kontakt">umówienia konsultacji telefonicznie</Link>
            </li>
            <li>Płatność gotówką lub przelewem</li>
            <li>
              W przypadku odwołania sesji proszę o kontakt minimum 24h wcześniej
            </li>
            <li>
              Dowiedz się więcej{" "}
              <Link to="/o-mnie">o moim podejściu terapeutycznym</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
