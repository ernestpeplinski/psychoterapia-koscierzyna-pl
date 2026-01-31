import { useState, useEffect } from "react";
import "../styles/cookieConsent.scss";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <div className="cookie-text">
          <p>
            <strong>Informacja o plikach cookie</strong>
          </p>
          <p>
            Ta strona używa plików cookie w celu zapewnienia najlepszej jakości
            usług. Kontynuując przeglądanie strony, wyrażasz zgodę na ich
            użycie. Pliki cookie są używane wyłącznie do celów funkcjonalnych
            i analitycznych strony.
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="btn-accept" onClick={handleAccept}>
            Akceptuję
          </button>
          <button className="btn-decline" onClick={handleDecline}>
            Odrzuć
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
