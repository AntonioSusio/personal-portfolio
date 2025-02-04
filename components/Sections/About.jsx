import React from "react"
import data from "../../data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function About() {
    return (
        <section className="about-section">
                <div className="card-container">
                    <div className="card-image-container">
                        <img src={`./src/assets/images/${data.image}`} alt="An image representing Antonio watching in the camera smiling" />
                    </div>

                    <div className="contacts-container">
                        <h1 className="name">{data.fullName}</h1>
                        <p className="contacts">Contacts</p>
                        <p className="email">{data.email}</p>

                        <div className="social-media-container">
                            <a 
                                href="https://www.linkedin.com/in/antonio-susio-9b2089226" 
                                target="_blank"
                                aria-label="Check out Antonio Linkedin profile for more information"
                            >
                                <FaLinkedinIn  className="linkedin-icon" />
                            </a>
                            <a 
                                href="https://github.com/AntonioSusio" 
                                target="_blank"
                                aria-label="Check out Antonio GitHub profile for more information"
                            >
                                <FaGithub className="github-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <section className="description-and-skill-section">
                    <p className="description-section-header">About me</p>
                    <div className="description-container">
                        <p className="description-text">{data.description}</p>
                    </div>
                    <a className="scrimba-link" href="https://scrimba.com" target="_blank">
                        <p className="scrimba-link-text">Click here if you want discover more about Scrimba</p>
                    </a>

                    <section className="skills-section">
                        <h2 className="skills-section-header">Skills</h2>
                        <div className="skills-container">
                            {data.skills.map(skill => (
                                <p className={`${skill} skills`} key={skill}>{skill}</p>
                            ))}
                        </div>
                    </section>
                </section>
        </section>
    )
}