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
              Nazywam się Magdalena Milewczyk. Moja droga terapeutyczna ukształtowała się dzięki różnorodnym doświadczeniom zawodowym i życiowym. To one doprowadziły mnie do miejsca, w którym psychoterapia stała się świadomym wyborem i naturalnym rozwinięciem mojego zainteresowania człowiekiem, jego emocjami oraz zdolnością do zmiany. Lubię myśleć o terapii jako o spotkaniu, w którym dwie osoby zatrzymują się, by z uważnością przyjrzeć się temu, co trudne, poruszające albo dotychczas odkładane na bok. W takiej rozmowie często pojawia się przestrzeń, która sprzyja odzyskaniu równowagi i wewnętrznego spokoju. Pracuję z osobami dorosłymi i nastolatkami od 13 r.ż.
            </p>
            <p className="about__description">
              Jestem certyfikowanym psychoterapeutą poznawczo-behawioralnym oraz magistrem pedagogiki. Jestem także członkiem{" "}
              <a
                href="https://pttpb.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="about__external-link"
              >
                Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej
              </a>{" "}
              im. Zdzisława Bizonia. Ukończyłam liczne szkolenia z zakresu systemowej terapii rodzin, dialogu motywującego, terapii skoncentrowanej na rozwiązaniach i interwencji kryzysowej oraz z zakresu przeciwdziałania przemocy domowej. Choć pracuję przede wszystkim w nurcie terapii poznawczo-behawioralnej, bliskie jest mi korzystanie z innych podejść, aby jak najlepiej dopasować proces terapeutyczny do indywidualnych potrzeb i możliwości cierpiącego człowieka.
            </p>
            <p className="about__description">
              Od {yearsOfExperience} lat zawodowo wspieram osoby doświadczające kryzysu psychicznego, pracując w Powiatowym Centrum Pomocy Rodzinie w Punkcie Interwencji Kryzysowej. Towarzyszenie ludziom w momentach przeciążenia i zmiany nauczyło mnie uważności, pokory i szacunku wobec różnorodności ludzkich historii. Prowadzę także warsztaty profilaktyczne dla młodzieży oraz warsztaty podnoszące kompetencje wychowawcze dla rodziców; jestem trenerem rekomendowanego programu „Szkoła dla Rodziców i Wychowawców”. Wierząc, że psychoedukacja stanowi ważny element troski o zdrowie psychiczne.
            </p>
            <p className="about__description">
              Dbając o jakość swojej pracy, regularnie korzystam z superwizji, uczestniczę w szkoleniach specjalistycznych oraz w konferencjach naukowych, stale poszerzając wiedzę i doskonaląc swoje umiejętności.
            </p>

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
        </div>
      </div>
    </div>
  );
}

export default About;
