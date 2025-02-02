import React from "react";

export default function Carousel({data, slideIndex, setSlideIndex}){

    function moveSlide(slideIndex, event) {
        switch (event.target.id) {
            case "next-slide-button":
                if(slideIndex === data.length - 1) {
                    setSlideIndex(0)
                }
                else {
                    setSlideIndex(prevSlideIndex => prevSlideIndex + 1)
                }
                break;

            case "previous-slide-button":
                if(slideIndex === 0) {
                    setSlideIndex(data.length - 1)
                }
                else {
                    setSlideIndex(prevSlideIndex => prevSlideIndex - 1)
                }
            default:
                break;
        }
    }

    return (
        <div className="carousel-container">
            <button 
                id="previous-slide-button" 
                className="carousel-btn"
                onClick={(event) => moveSlide(slideIndex, event)}>
                &lt;
            </button>
            
            <div className="carousel">
                {data}
            </div>

            <button 
                id="next-slide-button"
                className="carousel-btn"
                onClick={(event) => moveSlide(slideIndex, event)}
            >
                &gt;
            </button>
        </div>
    )
}



