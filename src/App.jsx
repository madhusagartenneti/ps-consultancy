import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Registration from "./components/Registration";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";

export default function App() {
  return (
    <div className="font-sans ">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Registration />
      <TermsAndConditions />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}