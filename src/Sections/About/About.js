import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-wrapper">
      <h2 className="about-title">The 'Verse! Origin Story</h2>
      <div className="about-content">
        <div className="text-section">
          <p className="about-text">
            In the middle of a galactic pandemic, The Mysterious Filmsnork traded away all his possessions for a ship that would take him far away from the worries of real life on a trip through the cinematic universes. One problem, Filmsnork had no idea how to fly the thing and lacked the money to pay anyone to do so. So he reached out to four trusted acquaintances, each from different parts of the globe.
          </p>
          <p>
            The four strangers each came aboard with unique interests and own sets of skills to help fly the ship (nicknamed the 'Verse Jumper) through The 'Verse! on a tour of some of the greatest stories and characters ever created. Little did any of them know of the adventures, fun, games, and array of space beings they would encounter along the way.
          </p>
        </div>
        <div className="image-section">
          <img src="/Rocketship02.png" alt="Space Scene" />
        </div>
      </div>
    </div>
  );
};

export default About;
