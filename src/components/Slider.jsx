// import sliderImg from "../assets/test.png";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import { useState } from 'react';
import "../styles/Slider.css";
import "../styles/helpers.css";

function Slider() {

  const [current, setCurrent] = useState(0);

  const img1 = ("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg");
  const img2 = ("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-2.jpg");
  const img3 = ("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-3.jpg");
  const slides = [img1, img2, img3];

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
    console.log("prev");
  };

  return (
      <section className="slider-container">
        {
          slides.map((slide) => {
            return <img src={slide} alt="" className="slider-img" />
          })
        }                  
        <button className="slider-prev button-icon" onClick={prevSlide}>
              <img src={arrowLeft} alt="" className="slider-prev-icon" />
          </button>
          <button className="slider-next button-icon" onClick={nextSlide}>
              <img src={arrowRight} alt="" className="slider-next-icon" />
          </button>
          <div className="slide-num">
              <span>1/4</span>
          </div>
    </section>
  )      
}

export default Slider;