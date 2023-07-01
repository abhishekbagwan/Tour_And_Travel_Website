import Hero from "../componenets/Hero";
import Navbar from "../componenets/Navbar";
import AboutImg from "../assets/about.jpg";
import Footer from "../componenets/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <Footer />
    </>
  );
}

export default About;
