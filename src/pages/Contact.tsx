import "../styles/contact.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import buildingImage from "../assets/images/building.webp";
import entranceImage from "../assets/images/entrance_photo.webp";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Kontakt</h1>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <div className="contact__card-icon contact__card-icon--phone">
                <FaPhone />
              </div>
              <h3 className="contact__card-title">Telefon</h3>
              <a href="tel:+48517383811" className="contact__card-link">
                517-383-811
              </a>
              <p className="contact__card-description">
                Jeśli chcesz się umówić na wizytę możesz zadzwonić na poniższy numer. Jeśli pojawia się trudność w nawiązaniu kontaktu proszę o sms – oddzwonię gdy będzie to możliwe.
              </p>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon contact__card-icon--email">
                <FaEnvelope />
              </div>
              <h3 className="contact__card-title">Email</h3>
              <a
                href="mailto:psychoterapiakoscierzyna@gmail.com"
                className="contact__card-link"
              >
                psychoterapiakoscierzyna@gmail.com
              </a>
              <p className="contact__card-description">
                Napisz wiadomość, odpowiem najszybciej jak to możliwe
              </p>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon contact__card-icon--location">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contact__card-title">Lokalizacja</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mickiewicza+18A+m3+Kościerzyna"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__card-link"
              >
                Mickiewicza 18A m3
                <br />
                Kościerzyna
              </a>
              <p className="contact__card-description">
                Gabinet znajduje się w centrum Kościerzyny
              </p>
            </div>
          </div>

          <div className="contact__location">
            <h2 className="contact__location-title">Jak dotrzeć?</h2>
            <div className="contact__location-images">
              <div className="contact__location-image">
                <img
                  src={entranceImage}
                  alt="Wejście do gabinetu - Mickiewicza 18A m3, Kościerzyna"
                  className="contact__image"
                />
              </div>
              <div className="contact__location-image">
                <img
                  src={buildingImage}
                  alt="Budynek - Mickiewicza 18A m3, Kościerzyna"
                  className="contact__image"
                />
              </div>
            </div>
            <div className="contact__location-info">
              <p>
                <strong>Gabinet znajduje się w centrum Kościerzyny</strong> przy ulicy
                Mickiewicza 18A m3. Dogodny dojazd komunikacją miejską oraz możliwość
                parkowania w pobliżu.
              </p>
              <p>
                W razie pytań dotyczących dojazdu, zapraszam do{" "}
                <a href="tel:+48517383811">kontaktu telefonicznego</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
