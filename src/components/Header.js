import React from "react";
import { Link } from "react-router-dom";

// header of the page
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="navbar-item" to="/">Pathfinder</Link>
      </nav>
    );
  }
}

export default Header;
