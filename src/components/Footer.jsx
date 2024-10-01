import React from 'react';

import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="footer-info">
            <div className="info-item">
              <FaMapMarkerAlt />
              <p>13 avenue du général Leclerc, 92340 Bourg-la-Reine, FRANCE</p>
            </div>
            <div className="info-item">
              <FaPhoneAlt />
              <p>+33 6 64 34 58 24</p>
            </div>
          </div>
          <p className="footer-copyright">Copyright © Tous droits réservés.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;