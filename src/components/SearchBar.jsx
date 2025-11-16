import React from "react";
import "../styles/search.css";


export function SearchBar({ value, onChange }) {
return (
<div className="search-bar">
<input
type="text"
placeholder="Search for new topics..."
value={value}
onChange={onChange}
/>
</div>
);
}