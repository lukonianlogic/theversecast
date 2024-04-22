import React from 'react';
import './Home.scss';
import { FaTwitter, FaInstagram, FaDiscord, FaTwitch, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const iconSize = 24; // Base size in pixels

  return (
    <div className="home">
      <div className="hero">
        <div className="content-wrapper">
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
            <div className="social-icons">
              <a href="https://twitter.com/TheVerseCast" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={iconSize * 2} />
              </a>
              <a href="https://www.instagram.com/theversecast/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={iconSize * 2}/>
              </a>
              <a href="https://discord.gg/Yu9Ah3aVXR" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={iconSize * 2}/>
              </a>
              <a href="https://www.twitch.tv/theversecast" target="_blank" rel="noopener noreferrer">
                <FaTwitch size={iconSize * 2} />
              </a>
              <a href="https://www.youtube.com/channel/UCJ86uYzQGJo1ZZpb2nAX8vQ" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={iconSize * 2} />
              </a>
              <a href="mailto:TheVerseSquad@gmail.com">
                <FaEnvelope size={iconSize * 2}/>
              </a>
            </div>
          </div>
          <div className="logo">
            <img src='../verselogo-transparent.png' alt="The 'Verse Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
