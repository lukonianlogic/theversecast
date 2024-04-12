import React from 'react';
import { FaTwitter, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <div className="social-icons">
          <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://discord.com/invite/your_discord" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
          <a href="mailto:hello@theversecast.com"><FaEnvelope /></a>
        </div>
        <p className="mb-0">Contact us: hello@theversecast.com</p>
      </div>
    </footer>
  );
};

export default Footer;
