import { NavLink } from "react-router";
import "./Header.css";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
                <h1>Portfolio</h1>
        </div>
        <div className="right-section">
            <div className="nav-contents">
                <NavLink to="/">Home</NavLink> 
                <NavLink to="/about">About</NavLink> 
                <NavLink to="/projects">Projects</NavLink> 
                <NavLink to="/resume">Resume</NavLink> 
                <NavLink to="/contact">Get In Touch</NavLink> 
            </div>
        </div>
      </div> 
    </>
  );
}
