import React from "react";
import About from "./About";
import Certificates from "./Certificates";
import Projects from "./Projects";

export default function Main() {
    return (
        <main className="main-content">
            <About />
            <Certificates />
            <Projects />
        </main>
    )
}