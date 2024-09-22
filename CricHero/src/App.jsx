import { useState } from 'react';
import { ScrollingText } from "./Components/ScrollingText.jsx";
import { Nav } from "./Components/Nav.jsx";
import { Match } from "./Components/Match.jsx";
import cricketer from "./assets/cricketer.png";
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
    )
  }

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

          <div className="match-between">IND VS PAK</div>
          <div className="ind-pak">
            <div className="ind">
              <p className="ind1">IND</p>
              <p className="ind-score">257/7</p>
              <p className="ind-over">19 over</p>
            </div>
            <div className="pak">
              <p className="pak1">PAK</p>
              <p className="pak-score">261/9</p>
              <p className="pak-over">20 over</p>
            </div>
          </div>

          <span className="search-type">
            <p className="matchtype">Match type</p>
            <div className="match-type">
              <button className="option-button active">T-20</button>
              <button className="option-button">ODI</button>
              <button className="option-button">T-10</button>
            </div>
          </span>

          <span>
            <p>Search Your match</p>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button className="search-button">Search</button>
            </div>
          </span>
        </div>
      </div>

      <MatchSchedule />
      <SocialMediaSection />

      <Footer />
    </>
  );
}

export default App;
