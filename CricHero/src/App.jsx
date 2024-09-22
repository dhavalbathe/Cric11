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

              </div>
          </div>
    </>
  )
}

export default App
