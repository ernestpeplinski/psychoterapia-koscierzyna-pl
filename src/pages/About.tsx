import "../styles/about.scss";
import profileImage from "../assets/images/magdalena-milewczyk.jpeg";

function About() {
  const startYear = 2012;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <div className="about">
      <div className="about__container">
        <h1 className="about__title">O mnie</h1>

        <div className="about__content">
          <div className="about__image-wrapper">
            <img
              src={profileImage}
              alt="Magdalena Milewczyk - Psychoterapeuta"
              className="about__image"
            />
          </div>

          <div className="about__text">
            <h2 className="about__subtitle">Magdalena Milewczyk</h2>
            <p className="about__description">
              Jestem pedagogiem, psychoterapeutą poznawczo-behawioralnym w
              trakcie szkolenia.
            </p>
            <p className="about__description">
              Jestem członkiem Polskiego Towarzystwa Terapii Poznawczej i
              Behawioralnej im. Zdzisława Bizonia. W pracy bliskie jest mi
              podejście terapii skoncentrowanej na rozwiązaniach, systemowej
              terapii rodzin oraz dialogu motywującego. Korzystam systematycznie
              z superwizji, szkoleń o tematyce psychologicznej i
              psychoterapeutycznej oraz uczestniczę w konferencjach naukowych.
            </p>
            <p className="about__description">
              Od {yearsOfExperience} lat zawodowo zajmuję się wspieraniem osób
              znajdujących się w kryzysie psychicznym pracując w Powiatowym
              Centrum Pomocy Rodziny w Punkcie Interwencji Kryzysowej. Ponadto
              prowadzę warsztaty profilaktyczne dla młodzieży i warsztaty
              podnoszące kompetencje wychowawcze dla rodziców.
            </p>

            <div className="about__credentials">
              <h3>Kwalifikacje:</h3>
              <ul>
                <li>Pedagog</li>
                <li>
                  Ceryfikowany psychoterapeuta poznawczo behawioralny
                </li>
                <li>
                  Członek Polskiego Towarzystwa Terapii Poznawczej i
                  Behawioralnej
                </li>
                <li>
                  {yearsOfExperience} lat doświadczenia w Punkcie Interwencji
                  Kryzysowej
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
