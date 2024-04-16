import React from 'react';
import './Home.scss';
import { FaTwitter, FaInstagram, FaDiscord, FaTwitch, FaYoutube,FaEnvelope } from 'react-icons/fa'; // Import icons

const Home = () => {
  const iconSize = 24; // Base size in pixels

  return (
    <div className="home">
      <div className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to The 'Verse!</h1>
          <h2>A fun and informative meta trip exploring your favorite cinematic universes - Marvel, Star Wars, DC, Star Trek & beyond.</h2>
          <iframe
            title="SpotifyPlayer"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/show/6BZ7BmCQxqlxoJ9fZBzATR?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <div className="social-icons" style={{ marginTop: '20px', fontSize: '24px' }}> {/* Styling for the icon container */}
            <a href="https://twitter.com/TheVerseCast" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
              <FaTwitter size={iconSize * 2} />
            </a>
            <a href="https://www.instagram.com/theversecast/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
              <FaInstagram size={iconSize * 2}/>
            </a>
            <a href="https://discord.gg/Yu9Ah3aVXR" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
              <FaDiscord size={iconSize * 2}/>
            </a>
            <a href="https://twitch.tv/your_twitch" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
              <FaTwitch />
            </a>
            <a href="https://youtube.com/your_youtube" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
              <FaYoutube size={iconSize * 2} />
            </a>
            <a href="mailto:hello@theversecast.com" style={{ margin: '0 10px' }}>
              <FaEnvelope size={iconSize * 2}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
