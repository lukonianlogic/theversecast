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
          <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={iconSize * 2} />
          </a>
          <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={iconSize * 2} />
          </a>
          <a href="https://discord.com/invite/your_discord" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={iconSize * 2} />
          </a>
          <a href="https://twitch.tv/your_twitch" target="_blank" rel="noopener noreferrer">
            <FaTwitch size={iconSize * 2} />
          </a>
          <a href="https://youtube.com/your_youtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={iconSize * 2} />
          </a>
          <a href="mailto:hello@theversecast.com">
            <FaEnvelope size={iconSize * 2} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
