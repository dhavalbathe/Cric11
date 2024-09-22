import { useState } from 'react';
import { ScrollingText } from "./Components/ScrollingText.jsx";
import { Nav } from "./Components/Nav.jsx";
import { Match } from "./Components/Match.jsx";
import './App.css';

function App() {
  return (
    <>
      <ScrollingText />
      <Nav />
      <div className="hero-section">
        <div className="left-section">
          <div className="text">
            {/* Additional content can be added here */}
          </div>
          <div className="matches">
            <Match />
            <Match />
          </div>
        </div>
        <div className="right-section">
          <h1>Digital Score Card</h1>
          <span className="search-type">
            <span>
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
          </span>
          <div class="ind-pak">
            <p className="match-between">IND VS PAK</p>
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
        </div>
      </div>
    </>
  );
}

export default App;
