import { useState } from 'react';
import { ScrollingText } from "./Components/ScrollingText.jsx";
import { Nav } from "./Components/Nav.jsx";
// import {First} 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
        <div className="hero-section">
            <ScrollingText />
            <Nav />
        </div>
        <main className ="firstpage">
          <First />
        </main>
    </>
  )
}

export default App
