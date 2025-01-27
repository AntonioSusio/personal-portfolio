import React from "react";
import certificatesData from "../certificatesData";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function Certificates() {
    const [certificates, setCertificates] = React.useState([])
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)

    React.useEffect(() => {
        function getCertificates() {
            setCertificates(certificatesData);
        }
        getCertificates();
        console.log(certificates)
    }, [])

    function moveSlide(currentIndex, event) {
        console.log(event.target)
        switch (event.target.id) {
            case "next-slide-button":
                if(currentIndex === certificates.length - 1) {
                    setCurrentSlideIndex(0)
                }
                else {
                    setCurrentSlideIndex(prevSlideIndex => prevSlideIndex + 1)
                }
                break;

            case "previous-slide-button":
                if(currentIndex === 0) {
                    setCurrentSlideIndex(certificates.length - 1)
                }
                else {
                    setCurrentSlideIndex(prevSlideIndex => prevSlideIndex - 1)
                }
            default:
                break;
        }
        
    }

    const certificatesEl = certificates.map((certificate, index) => (
            <div 
                key={index}
                className={`${index === currentSlideIndex ? "slide-visible" : "slide-hidden"} certificate-img-container`}>
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
                <MdNavigateBefore className="carousel-btn" id="previous-slide-button" onClick={() => moveSlide(currentSlideIndex, event)} />
                <MdNavigateNext className="carousel-btn" id="next-slide-button" onClick={() => moveSlide(currentSlideIndex, event)} />
            </div>
        </section>
    )
}