import React from 'react';
import './Footer.css';

export const Footers = () => {
  return (
    <>
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-section">
          <h2 className="footer-logo">BookVerse</h2>
          <p>Your gateway to the world of books. Explore, read, and grow.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Books</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 BookVerse. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
};
