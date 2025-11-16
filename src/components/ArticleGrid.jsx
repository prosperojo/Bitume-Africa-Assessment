import React from "react";
import { ArticleCard } from "./ArticleCard";
import "../styles/grid.css";

export const ArticlesGrid = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="articles-grid">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};
