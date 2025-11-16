import React from "react";
import "../styles/card.css";

export const ArticleCard = ({ article }) => {
  if (!article) return null;

  return (
    <div className="article-card">
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="article-image" />}
      <h3>{article.title}</h3>
      <p>{article.description || "No description available."}</p>
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="read-more-link"
      >
      Full Article
      </a>
    </div>
  );
};