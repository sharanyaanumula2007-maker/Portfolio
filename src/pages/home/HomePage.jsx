import { useEffect } from 'react';
import { NavLink } from "react-router";

import { Header } from "../../components/Header";

import './HomePage.css';

export function HomePage(){
    useEffect(()=>{
        document.title ="Home | Portfolio";
    },[]);
    return(
        <>
            <Header/>
            <div className="content">
                <div className="matter">
                    <h3>Hi! I'm</h3>
                    <h1>Sharanya</h1>
                    <p>A Computer Science and Business Systems student interested in web development and programming. I enjoy creating modern web applications, exploring different concepts in computer science, and strengthening my problem-solving skills through coding. I am continuously working on improving my technical knowledge and building projects to gain practical experience.</p>
                </div>
                <div className="image">
                    <img src="/images/profile-pic.png" alt="profile-image"/>
                </div>
            </div>
            <div className="nav-buttons">
                <div className="cta-buttons">
                    <h3>CTA-Buttons</h3>
                    <NavLink to="/resume">
                        Download Resume
                    </NavLink>
                    <NavLink to="/projects">
                        View Projects
                    </NavLink>
                    <NavLink to="/contact">
                        Contact Me 
                    </NavLink>
                </div>
                <div className="social-links">
                    <h3>Social Links</h3>
                    <a href="https://github.com/sharanyaanumula2007-maker" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/sharanya-anumula-2508083a2/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sharanyaanumula2007@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Sharanya,%0A%0AI%20would%20like%20to%20connect%20with%20you.%0A" target="_blank" rel="noopener noreferrer">
                        Email 
                    </a>
                    <a href="https://leetcode.com/u/sharanya_codesmasher/" target="_blank" rel="noopener noreferrer">
                        LeetCode
                    </a>
                </div>
            </div>
        </>
    );
}