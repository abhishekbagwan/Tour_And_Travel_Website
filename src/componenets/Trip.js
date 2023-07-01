import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/trip1.jpg";
import Trip2 from "../assets/trip2.jpg";
import Trip3 from "../assets/trip3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and prefic oceans. It consists of over 17,000 island, including Sumatra, Java,Sulawesi, and parts of Borneo and New Guinea."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malesiya"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and prefic oceans. It consists of over 17,000 island, including Sumatra, Java,Sulawesi, and parts of Borneo and New Guinea."
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and prefic oceans. It consists of over 17,000 island, including Sumatra, Java,Sulawesi, and parts of Borneo and New Guinea."
        />
      </div>
    </div>
  );
}

export default Trip;
