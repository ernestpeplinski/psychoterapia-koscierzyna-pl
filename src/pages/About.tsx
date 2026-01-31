import "../styles/about.scss";
import profileImage from "../assets/images/magdalena-milewczyk-profile.webp";

function About() {
  const startYear = 2012;
  const privateGabStartYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  const privateGabYears = currentYear - privateGabStartYear;

  return (
    <div className="about">
      <div className="about__container">
        <h1 className="about__title">O mnie</h1>

        <div className="about__content">
          <div className="about__left">
            <div className="about__image-wrapper">
              <img
                src={profileImage}
                alt="Magdalena Milewczyk - Psychoterapeuta"
                className="about__image"
              />
            </div>

            <div className="about__credentials">
              <h3>Kwalifikacje:</h3>
              <ul>
                <li>Certyfikat Psychoterapeuty Poznawczo-Behawioralnego PTTPB (nr 2310)</li>
                <li>Tytuł magistra pedagogiki</li>
                <li>Certyfikat Specjalisty Przeciwdziałania Przemocy w Rodzinie</li>
                <li>Trener rekomendowanego programu „Szkoła dla Rodziców i Wychowawców” oraz „Nastolatki”</li>
              </ul>
            </div>
          </div>

          <div className="about__text">
            <h2 className="about__subtitle">Magdalena Milewczyk</h2>
            <p className="about__description">
              Jestem pedagogiem i certyfikowanym psychoterapeutą poznawczo – behawioralnym. Jestem także członkiem{" "}
              <a
                href="https://pttpb.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="about__external-link"
              >
                Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej
              </a>{" "}
              im. Zdzisława Bizonia. Ukończyłam liczne szkolenia z zakresu systemowej terapii rodzin, dialogu motywującego, terapii skoncentrowanej na rozwiązaniach i interwencji kryzysowej oraz z zakresu przeciwdziałania przemocy domowej. Dbając o jakość swojej pracy, regularnie korzystam z superwizji, uczestniczę w szkoleniach specjalistycznych, konferencjach naukowych, stale poszerzając wiedzę i doskonaląc swoje umiejętności.
            </p>
            <p className="about__description">
              Od {yearsOfExperience} lat zawodowo wspieram osoby doświadczające kryzysu psychicznego, pracując w Punkcie Interwencji Kryzysowej w Kościerzynie oraz od {privateGabYears} lat w prywatnym gabinecie. Towarzyszę ludziom w momentach przeciążenia i kryzysów psychicznych. Podejmowałam także współprace z różnymi instytucjami realizując warsztaty dla rodziców i młodzieży. Doświadczenia zawodowe i życiowe doprowadziły mnie do miejsca, w którym psychoterapia stała się świadomym wyborem i naturalnym rozwinięciem mojego zainteresowania człowiekiem i jego emocjami.
            </p>
            <p className="about__description">
              Jeśli potrzebujesz dowiedzieć się więcej o mnie, zapraszam do kontaktu. Często to właśnie pierwszy krok staje się początkiem zmiany, której tak bardzo potrzebujemy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
