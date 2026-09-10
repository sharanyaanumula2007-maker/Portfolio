import { Header } from "../../components/Header";
import { projects } from "./projectsData";
import './projects.css';

export function Projects(){
    return(
        <>
            <Header/>
            <div className="projects">
                {projects.map((project,index)=>(
                    <div className="project" key={index}>
                    <img className="project-img" src={project.img} alt={project.name} />
                    <h2 className="project-name">{project.name}</h2>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Project</a>
                </div>
                ))}
            </div>
        </>
    );
}