import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="overlay"></div>
        {/* Background image */}
        <img src="verse-bg.png" alt="Hero"/>
        <div className="content">
          {/* Text content */}
          <h1>Welcome to The 'Verse!</h1>
          <h2>A fun and informative meta trip exploring your favorite cinematic universes - Marvel, Star Wars, DC, Star Trek & beyond.</h2>
          <iframe
            title="SpotifyPlayer"
            style={{ borderRadius: "12px" }} // Setting style as an object
            src="https://open.spotify.com/embed/show/6BZ7BmCQxqlxoJ9fZBzATR?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
