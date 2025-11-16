import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { HeroPost } from "../components/HeroPost";
import { ArticlesGrid } from "../components/ArticleGrid";
import { Footer } from "../components/Footer";
import "../styles/Home.css";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("general"); // default API category
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Label for UI, value for API
  const categories = [
    { label: "All", value: "general" },
    { label: "Business", value: "business" },
    { label: "Technology", value: "technology" },
    { label: "Sports", value: "sports" },
    { label: "Health", value: "health" },
    { label: "Politics", value: "politics" },
    { label: "Entertainment", value: "entertainment" },
  ];

  const fetchNews = async (selectedCategory = category) => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setArticles(data.articles || []);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to load news.");
    }

    setLoading(false);
  };

  // Fetch news when category changes
  useEffect(() => {
    fetchNews(category);
  }, [category]);

  // Filter by search only
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <Navbar />
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <CategoryFilter
        categories={categories.map((c) => c.label)}
        selected={categories.find((c) => c.value === category)?.label}
        onSelect={(label) => {
          const selectedCategory = categories.find((c) => c.label === label)?.value;
          setCategory(selectedCategory || "general");
        }}
      />

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <span></span>
        </div>
      )}
      {error && (
        <div className="error-container">
          <p>{error}</p>
        </div>
      )}

      {filteredArticles.length > 0 ? (
        <>
          <HeroPost article={filteredArticles[0]} />
          {filteredArticles.length > 1 && <ArticlesGrid articles={filteredArticles.slice(1)} />}
        </>
      ) : (
        !loading && <p>No articles now. Kindly check later</p>
      )}

      <Footer />
    </div>
  );
}