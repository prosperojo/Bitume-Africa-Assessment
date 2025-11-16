import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";


export default function SinglePost() {
const { id } = useParams();


return (
<div>
<Navbar />
<h1>Post {id}</h1>
<p>Full single post content will load here...</p>
</div>
);
}