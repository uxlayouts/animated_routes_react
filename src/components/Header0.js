import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
	<div className="top-bar">
		<nav>
			<NavLink exact to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/projects">Projects</NavLink>
			<NavLink to="/idontexist">Non-existent route</NavLink>
		</nav>
	</div>
);

export default Header;
