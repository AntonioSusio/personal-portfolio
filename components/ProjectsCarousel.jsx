import React from "react";
import projectsData from "../projectsData";

export default function ProjectsCarousel() {
    const [projects, setprojects] = React.useState([]);
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    React.useEffect(() => {
        function getProjects() {
            setprojects(projectsData);
        }
        getProjects();
        console.log(projects)
    }, [])

    function moveSlide(currentIndex, event) {
        switch (event.target.id) {
            case "next-slide-button":
                if(currentIndex === projects.length - 1) {
                    setCurrentSlideIndex(0)
                }
                else {
                    setCurrentSlideIndex(prevSlideIndex => prevSlideIndex + 1)
                }
                break;

            case "previous-slide-button":
                if(currentIndex === 0) {
                    setCurrentSlideIndex(projects.length - 1)
                }
                else {
                    setCurrentSlideIndex(prevSlideIndex => prevSlideIndex - 1)
                }
            default:
                break;
        }
    }

    const projectsEl = projects.map((project, index) => (
        <div 
            key={index}
            className={`${index === currentSlideIndex ? "slide-visible" : "slide-hidden"} project-card`}>
            <div className="project-img-container">
                <img 
                    src={`./src/assets/images/${project.image}`} 
                    alt={project.alternativeText}
                    onClick={() => openOverlay(`./src/assets/images/${project.image}`)}
                />
            </div>

            <div className={`${index === currentSlideIndex ? "slide-visible" : "slide-hidden"} project-description-container`}>
                <p>{project.description}</p>
            </div>
        </div>
    ))

    return(
        <>
            <div className="carousel">
                {projectsEl}
            </div>
            <div className="carousel-buttons-container">
                <button 
                    id="previous-slide-button" 
                    className="carousel-btn"
                    onClick={(event) => moveSlide(currentSlideIndex, event)}>
                    &lt;
                </button>
                <button 
                    id="next-slide-button"
                    className="carousel-btn"
                    onClick={(event) => moveSlide(currentSlideIndex, event)}
                >
                    &gt;
                </button>
            </div>
        </>
    )
}