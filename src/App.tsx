import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
