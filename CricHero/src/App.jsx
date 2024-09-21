import { useState } from 'react';
import { ScrollingText } from "./Components/ScrollingText.jsx";
import { Nav } from "./Components/Nav.jsx";
import './App.css'

function App() {
  

  return (
    <>
        <div className="hero-section">
            <ScrollingText />
            <Nav />
        </div>
    </>
  )
}

export default App
