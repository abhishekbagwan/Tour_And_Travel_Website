import Hero from "../componenets/Hero";
import Navbar from "../componenets/Navbar";
import AboutImg from "../assets/contact.jpg";
import Footer from "../componenets/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Contact;
