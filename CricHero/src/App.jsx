import { useState } from 'react';
import { ScrollingText } from "./Components/ScrollingText.jsx";
import { Nav } from "./Components/Nav.jsx";
import { Match } from "./Components/Match.jsx";
import cricketer from "./assets/cricketer.png"; // Importing cricketer image
import indiaFlag from "./assets/indiaflag.webp"; // Import the Indian flag image
import pakFlag from "./assets/pakflag.webp"; // Import the Pakistani flag image
import './App.css';
import SocialMediaSection from './Components/SocialMediaSection.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MatchSchedule from './Components/MatchSchedule';
import Footer from './Components/Footer.jsx';

function App() {
  const Text = () => {
    return (
      <div className="left-top-container">
        <div className="text-container">
          <h1 className='heading'>Welcome to Cric 11!</h1>
          <p className='para1'>Ready to play? Register your team now and compete in exciting matches. Stay updated with schedules, track your team's progress, and climb the leaderboard!</p>
          <p className='para2'>Register today and take your team to victory!</p>
        </div>
        <div className="cricket-image">
          <img className="Cricketer-image" src={cricketer} alt="Cricketer" />
        </div>
      </div>
    );
  };

  return (
    <>
      <ScrollingText />
      <Nav />
      <div className="hero-section">
        <div className="left-section">
          <Text />
          <div className="matches">
            <Match />
            <Match />
          </div>
        </div>

        <div className="right-section">
          <h1>Digital Score Card</h1>

          {/* Match Type Selection */}
          <div className="search-type">
            <p className="matchtype">Match Type</p>
            <div className="match-type">
              <button className="option-button active">T-20</button>
              <button className="option-button">ODI</button>
              <button className="option-button">T-10</button>
            </div>
          </div>

          {/* Search Section */}
          <div className="search-section">
            <p>Search Your Match</p>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by team, player, or venue..."
                className="search-input"
              />
              <button className="search-button">Search</button>
            </div>
          </div>

          {/* Match Details Section */}
          <div className="match-details">
            <div className="team">
              <p className="team-name">IND</p>
              {/* <img className="team-flag" src={indiaFlag} alt="Indian flag" /> */}
              <p className="vs">VS</p>
              <p className="team-name">PAK</p>
              {/* <img className="team-flag" src={pakflag} alt="Pakistani flag" /> */}
            </div>

            {/* Score and Overs Details */}
            <div className="score-section">
              <div className="team-score ind">
                <p className="team-label">IND  <img className="team-flag" src={indiaFlag} alt="pakflag" /></p>
                <p className="score">257/2</p>
                <p className="overs">19 overs</p>
                <p className="current-batting">
                  <strong>Current Batsmen:</strong> Rohit S(65 off 54)
                   Ruturaj G( 26 off 26)
                </p>
              </div>
              <div className="team-score pak">
                <p className="team-label">PAK <img className="team-flag" src={pakFlag} alt="pakflag" /></p>
                <p className="score">261/9</p>
                <p className="overs">20 overs</p>
                <p className="current-bowling">
                  <strong>Current Bowler:</strong> Shaheen Afridi (4-0-35-2)
                </p>
              </div>
            </div>

            {/* Match Status */}
            <div className="match-status">
              <p>
                <strong>IND Needs:</strong> 5 runs in 6 balls to win.
              </p>
              <p>
                <strong>Current Run Rate:</strong> 13.5
              </p>
              <p>
                <strong>Required Run Rate:</strong> 5.0
              </p>
            </div>
          </div>
        </div>

      </div>

      <MatchSchedule />
      <SocialMediaSection />
      <Footer />
    </>
  )
}

export default App;
