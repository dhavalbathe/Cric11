import React, { useState } from 'react';
import './MatchSchedule.css'; 

const TournamentSchedule = () => {
  const [selectedTournament, setSelectedTournament] = useState(null);

  const tournamentDetails = {
    "Shirwal Premiere League": {
      date: "25-May-2024",
      time: "5 PM",
      venue: "Milton Stadium Shirwal",
      description: "The Shirwal Premiere League brings together the best cricketing talent from the region, promising an electrifying tournament."
    },
    "Satara Cup": {
      date: "18-June-2024",
      time: "3 PM",
      venue: "Satara Sports Ground",
      description: "Catch the action of the Satara Cup, where local teams battle for the ultimate glory."
    },
    "Pune District Tournament": {
      date: "02-July-2024",
      time: "6 PM",
      venue: "Pune Cricket Arena",
      description: "The Pune District Tournament features top clubs from around the city competing for district honors."
    }
  };

  const handleDetailsClick = (tournamentName) => {
    setSelectedTournament(tournamentDetails[tournamentName]);
  };

  const closeModal = () => {
    setSelectedTournament(null);
  };

  return (
    <section className="tournament-schedule">
      <h2>Don't miss out on any action – browse through the upcoming tournaments from Cric11!</h2>

      <div className="tournament-cards">
        {Object.keys(tournamentDetails).map((tournament) => (
          <div key={tournament} className="tournament-card">
            <h3>{tournament}</h3>
            <p>{tournamentDetails[tournament].date} at {tournamentDetails[tournament].time}</p>
            <p>{tournamentDetails[tournament].venue}</p>
            <button className="details-button" onClick={() => handleDetailsClick(tournament)}>View Details</button>
          </div>
        ))}
      </div>

      {/* Modal for tournament details */}
      {selectedTournament && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h3>{selectedTournament.date} at {selectedTournament.time}</h3>
            <p><strong>Venue:</strong> {selectedTournament.venue}</p>
            <p>{selectedTournament.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TournamentSchedule;
