import React from "react";
import certificatesData from "../certificatesData";

export default function Carousel() {
    const [certificates, setCertificates] = React.useState([]);
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const [isZoomed, setIsZoomed] = React.useState(false); // Overlay state
    const [imgSrc, setImgSrc] = React.useState(''); // Image zoom state

    React.useEffect(() => {
        function getCertificates() {
            setCertificates(certificatesData);
        }
        getCertificates();
        console.log(certificates)
    }, [])

    function moveSlide(currentIndex, event) {
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

    function openOverlay(src) {
        setImgSrc(src);
        setIsZoomed(true);
    }

    function closeOverlay() {
        setIsZoomed(false)
    }

    const certificatesEl = certificates.map((certificate, index) => (
        <div 
            key={index}
            className={`${index === currentSlideIndex ? "slide-visible" : "slide-hidden"} certificate-img-container`}>
            <img 
                src={`./src/assets/images/${certificate.image}`} 
                alt={certificate.alternativeText}
                onClick={() => openOverlay(`./src/assets/images/${certificate.image}`)}
            />
        </div>
    ))

    return(
        <>
            <div className="carousel">
                {certificatesEl}
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

            {/* Zoomed image overlay */}
            {isZoomed && (
                <div className="overlay" onClick={closeOverlay}>
                    <img src={imgSrc} alt="Carousel image zoomed" className="img-zoom" />
                </div>
            )}
        </>
    )
}