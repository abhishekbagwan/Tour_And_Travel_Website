import Hero from "../componenets/Hero";
import Navbar from "../componenets/Navbar";
import AboutImg from "../assets/about.jpg";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
}

export default Service;
