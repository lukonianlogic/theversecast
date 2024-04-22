import React from 'react';
import './Footer.scss';
import { FaTwitter, FaInstagram, FaDiscord, FaTwitch, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  // Define a base size for the icons
  const iconSize = 24; // Base size in pixels

  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <div className="social-icons">
          <a href="https://twitter.com/TheVerseCast" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={iconSize * 2} />
          </a>
          <a href="https://www.instagram.com/theversecast/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={iconSize * 2} />
          </a>
          <a href="https://discord.gg/Yu9Ah3aVXR" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={iconSize * 2} />
          </a>
          <a href="https://www.twitch.tv/theversecast" target="_blank" rel="noopener noreferrer">
            <FaTwitch size={iconSize * 2} />
          </a>
          <a href="https://www.youtube.com/channel/UCJ86uYzQGJo1ZZpb2nAX8vQ" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={iconSize * 2} />
          </a>
          <a href="mailto:TheVerseSquad@gmail.com">
            <FaEnvelope size={iconSize * 2} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
