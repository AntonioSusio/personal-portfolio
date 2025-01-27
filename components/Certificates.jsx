import React from "react"
import certificatesData from "../certificatesData"
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Certificates() {
    const [certificates, setCertificates] = React.useState(certificatesData)

    console.log(certificates)

    const certificatesEl = certificates.map(certificate => (
        <div 
            key={certificate.id}
            className={`${certificate.id === 1 ? "slide-visible" : "slide-hidden"} certificate-img-container`}>
            <img 
                src={`./src/assets/images/${certificate.image}`} 
                alt={certificate.description} 
            />
        </div>
    ))

    return (
        <section className="certificates-section">
            <h2 className="certificates-section-header">Certificates</h2>
            <div className="carousel">
                {certificatesEl}
            </div>
            <div className="carousel-buttons-container">
                <GrFormPrevious className="carousel-btn" />
                <GrFormNext className="carousel-btn"/>
            </div>
        </section>
    )
}