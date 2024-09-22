import React from 'react';
import './MatchSchedule.css'; 

const TournamentSchedule = () => {
  return (
    <section className="tournament-schedule">
      <h2>Don't miss out on any action – browse through the upcoming tournaments!</h2>

      {/* Tournament Cards */}
      <div className="tournament-cards">
        <div className="tournament-card">
          <h3>Shirwal Premiere League</h3>
          <p>25-May-2024 at 5 PM</p>
          <p>Milton Stadium Shirwal</p>
          <button className="details-button">View Details</button>
        </div>

        <div className="tournament-card">
          <h3>Satara Cup</h3>
          <p>18-June-2024 at 3 PM</p>
          <p>Satara Sports Ground</p>
          <button className="details-button">View Details</button>
        </div>

        <div className="tournament-card">
          <h3>Pune District Tournament</h3>
          <p>02-July-2024 at 6 PM</p>
          <p>Pune Cricket Arena</p>
          <button className="details-button">View Details</button>
        </div>
      </div>
    </section>
  );
};

export default TournamentSchedule;
