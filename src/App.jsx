import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";


export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/post/:id" element={<SinglePost />} />
</Routes>
</Router>
);
}