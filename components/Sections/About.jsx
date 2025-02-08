import React from "react"
import data from "../../data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="about-section">
                <div className="card-container">
                    <div className="card-image-container">
                        <img src={`./src/assets/images/${data.image}`} alt="An image representing Antonio watching in the camera smiling" />
                    </div>

                    <div className="contacts-container">
                        <h1 className="name">{data.fullName}</h1>
                        <p className="contacts">{t("CONTACTS")}</p>
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
                    <p className="description-section-header">{t("ABOUT_ME")}</p> 
                    <div className="description-container">
                        <p className="description-text">{t("MY_DESC")}</p>
                    </div>
                    <a className="scrimba-link" href="https://scrimba.com" target="_blank">
                        <p className="scrimba-link-text">{t("SCRIMBA_LINK")}</p>
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