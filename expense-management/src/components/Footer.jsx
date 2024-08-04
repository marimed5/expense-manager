import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Sign up for our newsletter:</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
        <p>&copy; 2024 Expense Manager. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
