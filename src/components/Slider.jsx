// import sliderImg from "../assets/test.png";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import { useState } from 'react';
import "../styles/Slider.css";
import "../styles/helpers.css";

function Slider(props) {

  const [current, setCurrent] = useState(0);


  const nextSlide = () => {
    setCurrent(current === props.slides.length - 1 ? 0 : current + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? props.slides.length - 1 : current - 1);
    console.log("prev");
  };

  const slideActions = () => {
    if (props.slides.length > 1 ) {
      return (
        <div className="slider-actions">
          <button className="slider-prev button-icon" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider-prev-icon" />
          </button>
          <div className="slide-num">
              <span>{current+1}/{props.slides.length}</span>
          </div>
          <button className="slider-next button-icon" onClick={nextSlide}>
              <img src={arrowRight} alt="" className="slider-next-icon" />
          </button>
        </div>
      )
    } 
  }

  return (
      <section className="slider">
        <div className="slider-container">
          {
            props.slides.map((slide, index) => {
              console.log("current, index", current, index)
              return <img src={props.slides[current]} alt="" className="slider-img" key={index} />
            })
          }
        </div>
      {slideActions()}

    </section>
  )      
}

export default Slider;