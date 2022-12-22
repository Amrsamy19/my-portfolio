import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./index.scss";

function Menu({ active, setActive }) {
	const location = useLocation();

	useEffect(() => {
		setActive(false);
	}, [location]);

	return (
		<ul className={`menu ${active ? "active" : ""}`}>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/projects">My Projects</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
		</ul>
	);
}

export default Menu;
