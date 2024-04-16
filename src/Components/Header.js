import React from 'react';
import './Header.scss';


const Header = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <span className="navbar-brand" onClick={() => scrollTo('home')}>
            <img src='v-logo.png' alt="The 'Verse Logo" style={{ height: '100px' }} />
          </span>
          <div className="collapse navbar-collapse" id="navbarNav">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
