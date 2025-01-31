import React from "react";

export default function Carousel() {

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

    return (
        <>
            <div className="carousel">
                {dataEl}
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
        </>
    )
}