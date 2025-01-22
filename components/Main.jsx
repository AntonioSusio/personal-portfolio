import React from "react";
import data from "../data";

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
                </div>
            </section>
        </main>
    )
}