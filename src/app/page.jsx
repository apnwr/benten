//import { Header } from "./components/Header";
//import { HeroSection } from "./components/HeroSection";
//import Bricks from "./assets/images/bricks.png";
//import Image from "next/image";
//import styles from "./page.module.scss";

'use client';

import './styles/App.css';
import React, { useState } from 'react';

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className='Main_Area'>
        <SideImage />
        <SideInfo />
      </div>
    </div>
    /*
    <main className={styles.main}>
     

      <Header />
      <HeroSection />
      <div className={styles.bg} />
      
    </main>
  */
  );
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='Navbar'>
      <div className='Navbar-Desktop'>
        <div className='Navbar__Logo'>
          <p>Team <span>BEN 10</span></p>
        </div>
        <div className='Navbar__List'>
          <ul>
            <li>How it Works</li>
            <li>Features</li>
            <li>Use Cases</li>
            <li>Design Refs</li>
          </ul>
        </div>
        <div className='Navbar__ContactUs'>
          <button>Contact Us</button>
        </div>
      </div>
      <div className='Navbar-Mobile'>
        <div className='Navbar__Logo'>
            <p>Team <span>BEN 10</span></p>
        </div>
        <div className='Navbar__List'>
            <button className={`Navbar__List-Hamburger-Button ${isOpen ? "Open" : "Close"}`} onClick={() => setOpen(!isOpen)} />
            <div className={`Navbar__List-Hamburger-Panel ${isOpen ? "Open" : "Close"}`}>
              <ul>
                <li>How it Works</li>
                <li>Features</li>
                <li>Use Cases</li>
                <li>Design Refs</li>
              </ul>
              <div className='Navbar__ContactUs'>
                <button>Contact Us</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

const SideImage = () => {
  return (
    <div className='SideImage'>
      
    </div>
  )
}

const SideInfo = () => {

  /*
  const minRoomSize = 15;
  const maxRoomSize = 100;

  const [roomSize, setRoomSize] = useState();

  const handleRoomSize = event => {
    //const value = Math.max(minRoomSize, Math.min(maxRoomSize, Number(event.target.value)));
    let value;
    if (event.target.value > maxRoomSize) {
      value = maxRoomSize;
    } else if (event.target.value < minRoomSize) {
      value = minRoomSize;
    } else {
      value = event.target.value;
    }

    setRoomSize(value);
  };
  */
  return (
    <div className='SideInfo'>
      <div className='SideInfo__Wrapper'>
        <div className='SideInfo__Title'>
          <span id='Title-1'>Design Smarter</span><span id='Title-2'>,</span><br />
          <span id='Title-3'>Design Faster</span>
        </div>
        <div className='SideInfo__Subtitle'>
          Experience the future of floor planning using AI, revolutionise the way you design spaces with intelligence, innovation and optimisation
        </div>
        <div className='SideInfo__InputAreas'>
          <form>
            <div className='SideInfo__InputAreas-Group'>
              <input type="number" required />
              <label>Enter Room Length</label>
            </div>
            <div className='SideInfo__InputAreas-Group'>
              <input type="number" required />
              <label>Enter Room Breadth</label>
            </div>
            <div className='SideInfo__InputAreas-Group'>
              <input type="number" required />
              <label>Select Objects</label>
            </div>
            <button>Generate Floor Plans</button>
          </form>
        </div>
      </div>
    </div>
  )
}