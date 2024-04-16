import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNavbar = () => setIsNavExpanded(!isNavExpanded);

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsNavExpanded(false); // Optionally close the navbar when a link is clicked
    }
  };

  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <span className="navbar-brand" onClick={() => scrollTo('home')}>
            <img src='v-logo.png' alt="The 'Verse Logo" style={{ height: '60px' }} />
          </span>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={isNavExpanded} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="nav-link" onClick={() => scrollTo('episodes')}>Episodes</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={() => scrollTo('about')}>About</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={() => scrollTo('crew')}>The Squad</span>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary">SUBSCRIBE</button>
      </nav>
    </header>
  );
};

export default Header;
