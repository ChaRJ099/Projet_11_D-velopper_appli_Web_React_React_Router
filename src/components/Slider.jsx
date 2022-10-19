// import sliderImg from "../assets/test.png";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import JSON from '../datas/logements.JSON';
import { useState, useEffect } from 'react';
import "../styles/Slider.css";
import "../styles/helpers.css";

function Slider() {

    const [sliders, setSlider] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(JSON)
        .then(result => result.json())
        .then(
            (result) => {
            setLoaded(true);
            setSlider(result);
            },
            (error) => {  
            setError(error);
            }
        )

    }, [])

    if (error) {
        return <div>Impossible de récupérer la galerie: {error.message}</div>
  } else if  (!isLoaded) {
    return <div>...Chargement de la galerie</div>
  } else {
    return (
        <section className="slider-container">
          {sliders.map((slide, index)=> {
            return <div cover={slide.cover} title={slide.title} key={index}></div>
          })}
          <button className="slider-prev button-icon" /*onClick={prevSlide}*/>
                <img src={arrowLeft} alt="" className="slider-prev-icon" />
            </button>
            <button className="slider-next button-icon" /*onClick={nextSlide}*/>
                <img src={arrowRight} alt="" className="slider-next-icon" />
            </button>
            <div className="slide-num">
                <span>1/4</span>
            </div>
      </section>
    )      
            
  }

    
}
export default Slider;