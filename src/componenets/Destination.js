import Mountain1 from "../assets/1visit.jpg";
import Mountain2 from "../assets/2visit.jpg";
import Mountain3 from "../assets/3rdvisit.jpg";
import Mountain4 from "../assets/4visit.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the oppertunity to see a lot within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text=" One of the most iconic views in Luzon Mt. Taal boasts a volcano inside
      a lake inside an island. If you fancy a closer look, the hike up to
      the crater is a mere 45 minitues, and is easy enough for beginerrs.
      Guides will assist you most of the way, and you'll see the peculiar
      enviournment found on an active volcano, including volcanic rocks and
      stream vents. The hike can be dusty and hot, so plan for an early
      morning trip, and then unwind with some bulalo before heading back
      home!"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul,Batangas"
        text=" One of the most iconic views in Luzon Mt. Taal boasts a volcano inside
      a lake inside an island. If you fancy a closer look, the hike up to
      the crater is a mere 45 minitues, and is easy enough for beginerrs.
      Guides will assist you most of the way, and you'll see the peculiar
      enviournment found on an active volcano, including volcanic rocks and
      stream vents. The hike can be dusty and hot, so plan for an early
      morning trip, and then unwind with some bulalo before heading back
      home!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
