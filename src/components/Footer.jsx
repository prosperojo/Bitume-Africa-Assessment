import React from "react";
import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">About Us</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} NewsToday. All rights reserved.</p>
    </footer>
  );
}