import React from "react";
import certificatesData from "../../certificatesData";
import Carousel from "../Carousel";
import { useTranslation } from 'react-i18next';

export default function Certificates() {
    const [certificates, setCertificates] = React.useState([]);
    const [slideIndex, setSlideIndex] = React.useState(0);
    const [isZoomed, setIsZoomed] = React.useState(false); // Overlay state
    const [imgSrc, setImgSrc] = React.useState(''); // Image zoom state

    const { t } = useTranslation();

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
            src={certificate.imageUrl} 
            className="certificate-img"
            alt={certificate.alternativeText}
            style={{ translate: `${-100 * slideIndex}%`}}
            onClick={() => openOverlay(`${certificate.imageUrl}`)}
        />
    ))
    
    return (
        <section className="certificates-section">
            <h2 className="certificates-section-header">{t("CERTIFICATES")}</h2>
            <Carousel 
                data={certificateEl}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
            />
            
            {/* Zoomed image overlay */}
            {isZoomed && (
                <div className="overlay" onClick={closeOverlay}>
                    <img src={imgSrc} alt="Carousel image zoomed" className="img-zoom" />
                </div>
            )}
        </section>
    )
}