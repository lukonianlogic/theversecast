import React from 'react';
import './Header.scss';

const Header = () => {
  const scrollToEpisodes = () => {
    // Logic to scroll to the Episodes section
    // Example: document.getElementById('episodes').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    // Logic to scroll to the About section
    // Example: document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCrew = () => {
    // Logic to scroll to the About section
    // Example: document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='header'>
      {/* <div className="container-fluid"> */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <span className="navbar-brand" onClick={scrollToEpisodes}>
              The 'Verse!
            </span>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <span className="nav-link" onClick={scrollToEpisodes}>Episodes</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={scrollToAbout}>About</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={scrollToCrew}>The Squad</span>
                </li>
              </ul>
            </div>
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;
