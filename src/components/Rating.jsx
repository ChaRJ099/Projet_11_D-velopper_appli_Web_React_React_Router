import React from "react";
import redStar from "../assets/red-star.svg";
import greyStar from "../assets/grey-star.svg";

function Rating(props) {

  const ratings = [1, 2, 3, 4, 5];
  const stars = Number(props.stars);

return (
    <div className="bloc-rate">    
        {
          ratings.map((rate, index) => {
            if (stars >= rate) {
              return <img src={redStar} alt="etoile rose" key={index} />
            }
            return <img src={greyStar} alt="etoile grise" key={index} />

          })
        }
    </div>
  
  )
};

export default Rating;