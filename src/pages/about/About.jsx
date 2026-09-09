import { Header } from "../../components/Header";
import './About.css';
export function About(){
    return(
        <>
            <Header/>
            <div className="container">
            <div className="about">
                <div className="intro">Hi, I'm Sharanya, a Computer Science and Business Systems student passionate about software development and problem solving. I enjoy building web applications and exploring technologies that can solve real-world problems.</div>
                <div className="details">
                <div className="detail"><h3>Education:</h3> <p>B.Tech – Computer Science and Business Systems</p></div>
                <div className="detail"><h3>Skills:</h3> <p>Java, Python, HTML, CSS, JavaScript, React, SQL</p></div>
                <div className="detail"><h3>Interests:</h3> <p> Web Development, AI/ML, Data Structures & Algorithms</p></div>
                <div className="detail"><h3>Goal:</h3> <p>To build impactful software solutions while continuously improving my technical skills.</p></div>
            </div>
            </div>
            </div> 
        </>
        
    );
}