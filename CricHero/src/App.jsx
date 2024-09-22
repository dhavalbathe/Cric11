import { useState } from 'react';
import { ScrollingText } from "./Components/ScrollingText.jsx";
import { Nav } from "./Components/Nav.jsx";
import { Match } from "./Components/Match.jsx";
import './App.css'

function App() {
  

  return (
    <>
          <ScrollingText />
          <Nav />
          <div className="hero-section">
              <div className="left-section">
                <div className="text">
                    
                </div>
                <div className="matches">
                    <Match />
                    <Match />
                </div>

              </div>
          <div className="right-section">
              <div className="text">
                  </div>
              <div className="matches"></div>
              </div>
              <div className="right-section">
              <h1>Digital Score Card</h1>
              <div className="match-type"></div>
              <div className="search-match"></div>
             
              <div className="match-between">IND VS PAK</div>
              <div className="ind">
                <div className="ind1">IND</div>
                <div className="ind-score">257/7</div>
                <div className="ind-over">19 over</div>
              </div>
              <div className="pak">
                <div className="pak1">PAK</div>
                <div className="pak-score">261/9</div>
                <div className="pak-over">20 over</div>
              </div>
              </div>
        </div>
    </>
  )
}

export default App