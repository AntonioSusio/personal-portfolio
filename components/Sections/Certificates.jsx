import React from "react";
import certificatesData from "../../certificatesData";
import Carousel from "../Carousel";

export default function Certificates() {
    const [certificates, setCertificates] = React.useState([]);
    const [slideIndex, setSlideIndex] = React.useState(0);
    const [isZoomed, setIsZoomed] = React.useState(false); // Overlay state
    const [imgSrc, setImgSrc] = React.useState(''); // Image zoom state

    React.useEffect(() => {
        function getCertificates() {
            setCertificates(certificatesData);
        }
        getCertificates();
    }, [])

    function openOverlay(src) {
        setImgSrc(src);
        setIsZoomed(true);
    }

    function closeOverlay() {
        setIsZoomed(false)
    }

    const certificateEl = certificates.map(certificate => (
        <img 
            key={certificate.id}
            className="image-slider"
            src={certificate.imageUrl} 
            alt={certificate.alternativeText}
            style={{ translate: `${-100 * slideIndex}%`}}
            onClick={() => openOverlay(`${certificate.imageUrl}`)}
        />
    ))
    
    return (
        <>
        <section className="certificates-section">
        <h2 className="certificates-section-header">Certificates</h2>
        <Carousel 
            data={certificateEl}
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
        />
        </section>
        
        {/* Zoomed image overlay */}
            {isZoomed && (
                <div className="overlay" onClick={closeOverlay}>
                    <img src={imgSrc} alt="Carousel image zoomed" className="img-zoom" />
                </div>
            )}
        </>
    )
}