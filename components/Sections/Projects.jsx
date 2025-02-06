import React from "react";
import projectsData from "../../projectsData"
import Carousel from "../Carousel";

export default function Projects() {
    const [projects, setProjects] = React.useState([]);
    const [slideIndex, setSlideIndex] = React.useState(0);
    const [isZoomed, setIsZoomed] = React.useState(false); // Overlay state
    const [imgSrc, setImgSrc] = React.useState(''); // Image zoom state

    React.useEffect(() => {
            function getProjects() {
                setProjects(projectsData);
            }
            getProjects();
    }, [])

    function openOverlay(src) {
        setImgSrc(src);
        setIsZoomed(true);
    }

    function closeOverlay() {
        setIsZoomed(false)
    }

    const projectsEl = projects.map(project => (
        
            <div 
                key={project.id}
                className="project-card"
                style={{ translate: `${-100 * slideIndex}%`}}
            >
                <div className="project-img-container">
                    <img 
                        className="project-img" 
                        src={project.imagePath} 
                        alt={project.alternativeText} 
                        onClick={() => openOverlay(`${project.imagePath}`)}
                    />
                </div>
                <div className="project-description">
                    <p className="project-description-text">{project.description}</p>
                </div>

                <div className="technologies-container">
                    <p className="project-technologies">Technologies: {project.technologies.map(tech => 
                        <span key={tech} className="technology">{tech}</span>)}
                    </p>
                </div>

                <a className="project-link" href={project.url} target="_blank">
                    <p className="project-link-text">Click here to visit project page</p>
                </a>
            </div>
       
    ))

    return (
        <section className="projects-section">
            <h2 className="projects-section-header">My Projects</h2>
            <Carousel 
                data={projectsEl}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
            />


            {/* Zoomed image overlay */}
            {isZoomed && (
                <div className="overlay" onClick={closeOverlay}>
                    <img src={imgSrc} alt="Carousel image zoomed" className="img-zoom" />
                </div>
            )}
        </section>
    )
}