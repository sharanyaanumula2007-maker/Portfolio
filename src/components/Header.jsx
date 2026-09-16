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
                <NavLink to="/" className={({isActive})=> isActive ?"active":""}>Home</NavLink> 
                <NavLink to="/about" className={({isActive})=> isActive ?"active":""}>About</NavLink> 
                <NavLink to="/projects" className={({isActive})=> isActive ?"active":""}>Projects</NavLink> 
                <NavLink to="/resume" className={({isActive})=> isActive ?"active":""}>Resume</NavLink> 
                <NavLink to="/contact" className={({isActive})=> isActive ?"active":""}>Get In Touch</NavLink> 
            </div>
        </div>
      </div> 
    </>
  );
}
