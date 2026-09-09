import { Header } from "../../components/Header";

export function Projects(){
    return(
        <>
            <Header/>
            <div className="projects">
                <div className="project">
                    <img src="project-img1" alt="project-img1" />
                    <h2 className="project-name">Simple Calculator</h2>
                    
                </div>
            </div>
        </>
    );
}