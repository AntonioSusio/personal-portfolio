import React from "react";
import data from "../data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


export default function Main() {
    return (
        <main className="main-content">
            <section className="about-section">
                <div className="card-container">
                    <div className="card-image-container">
                        <img src={`./src/assets/images/${data.image}`} alt="" />
                    </div>
                    <h1 className="name">Antonio Susio</h1>
                    <p className="contacts">Contacts</p>
                    <p className="email">{data.email}</p>

                    <div className="social-media-container">
                        <a href="https://www.linkedin.com/in/antonio-susio-9b2089226" target="blank">
                            <FaLinkedinIn  className="linkedin-icon" />
                        </a>
                        <a href="https://github.com/AntonioSusio">
                            <FaGithub className="github-icon" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}