import React from "react";
import "../styles/categories.css";


export function CategoryFilter({ categories, selected, onSelect }) {
return (
<div className="categories">
{categories.map(cat => (
<button
key={cat}
className={selected === cat ? "active" : ""}
onClick={() => onSelect(cat)}
>
{cat}
</button>
))}
</div>
);
}