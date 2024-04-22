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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <span className="navbar-brand" onClick={() => scrollTo('homePage')}>
            <img src='v-logo.png' alt="The 'Verse Logo" style={{ height: '60px' }} />
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

      </nav>
    </header>
  );
};

export default Header;
