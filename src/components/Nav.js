import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="App-nav">
      <NavLink className="App-nav-link" exact to="/" activeClassName="active">Home</NavLink>
      <NavLink className="App-nav-link" to="/about">About</NavLink>
      <NavLink className="App-nav-link" to="/notfound">404</NavLink>
      <NavLink className="App-nav-link" to="/tacos">Tacos</NavLink>
      <NavLink className="App-nav-link" to="/posts">Posts</NavLink>
    </div>
  );
};
export default Nav;
