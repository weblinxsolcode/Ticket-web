import React, { useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import config from '../config'
import { useState } from "react";


const SliderHome = () => {
  const [allReview, setallReview] = useState([])
  const getReview = async () => {

    axios.post(`${config.baseURL}/get-all-review.php`)
    .then(async (response) => {
      // console.log(response)
      setallReview(await response?.data);

    })
  }
 
  useEffect(() => {
    getReview();
  }, [])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        
       
        {allReview.map((items) => (
              <div className="px-3 text-center">
              <div className="item">
              <div className="testimonial_wrap p-3 rounded_img">
                {/* <img src="assets/images/testmonial_client1.jpg" className="animation" data-animation="zoomIn" data-animation-delay="0.2s" alt="testmonial_client1" /> */}
                <h4 className="animation uppercase text-blue fw-bold mb-3"  data-animation="fadeInUp" data-animation-delay="0.3s">{items.user_name}
                </h4>
                {/* <p>{items.id}</p> */}
                {/* <span className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">CEO
                  Company</span> */}
                <i className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                  "{items.review}"</i>
              </div>
              </div>
        </div>
            ))}
      
        

      </Slider>
    </div>
  )
}

export default SliderHome


