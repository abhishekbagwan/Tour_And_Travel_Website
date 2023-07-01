import Destination from "../componenets/Destination";
import Footer from "../componenets/Footer";
import Hero from "../componenets/Hero";
import Navbar from "../componenets/Navbar";
import Trip from "../componenets/Trip";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_640.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plane"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
