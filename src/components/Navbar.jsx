import React from "react";
import "../styles/navbar.css";


export function Navbar() {
return (
<nav className="navbar">
<div className="logo">NewsToday</div>
<ul className="nav-links">
<li>Top Stories</li>
<li>World</li>
<li>Business</li>
<li>Technology</li>
<li>Sports</li>
</ul>
</nav>
);
}