import React from 'react';
import Slider from "react-slick";
import './SliderNew.css';


import img1 from '../assets/sliderphotoONE.jpg';
import img2 from '../assets/sliderphotoTwo.jpg';
import img3 from '../assets/sliderphotoTree.jpg';

const SliderNew = () => {
const setting = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
}

    return(
     <Slider {...setting}>
         <div>
            <p className='review_text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione eos, atque consequatur earum, non dolore veniam aliquam aut dolorum id. Dolor, recusandae repellat. Consequatur!
            </p>
<div className="slider_img d-flex align-items-center gap-3">
  <img src={img1} alt="" />
  <h6>Hanna</h6>
</div>
          </div>
          <div>
            <p className='review_text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione eos, atque consequatur earum, non dolore veniam aliquam aut dolorum id. Dolor, recusandae repellat. Consequatur!
            </p>
<div className="slider_img d-flex align-items-center gap-3">
  <img src={img2} alt="" />
  <h6>Geine</h6>
</div>
          </div>
          <div>
            <p className='review_text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione eos, atque consequatur earum, non dolore veniam aliquam aut dolorum id. Dolor, recusandae repellat. Consequatur!
            </p>
<div className="slider_img d-flex align-items-center gap-3">
  <img src={img3} alt="" />
  <h6>Steve</h6>
</div>
          </div>
         
    </Slider>
    )
};

export default SliderNew;