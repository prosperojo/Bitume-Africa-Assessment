import React from "react";
import "../styles/hero.css";

export const HeroPost = ({ article }) => {
  if (!article) return null;

  return (
    <div className="hero-post">
      <div className="hero-image-container">
        <img src={article.urlToImage} alt={article.title} className="hero-image" />
        <div className="hero-overlay">
          <h2>{article.title}</h2>
          <p>{article.description || "No description available."}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">
            Read More
          </a>
        </div>
      </div>
    </div>

  );
};
