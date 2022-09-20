import React, { useEffect, useState } from 'react'
import Header from './Elements/Header'
import Footer from './Elements/Footer'
import axios from 'axios';
import config from '../config'
export default function Terms() {
  const [termsdata, settermsdata] = useState([])
  const termsalldata = async () => {
    await axios.post(`${config.baseURL}/all-content.php`)
      .then(async (response) => {
        settermsdata( await response.data[2]);
        console.log(termsdata);
      })
  }
  const scroll = () => {
    window.scrollTo(0,0); 

    console.log("scroll value reset")
  }
  
  useEffect(() => {
    termsalldata();
    scroll();
  }, [])


  return (
    <div>
      {/* START LOADER */}
      {/* <div id="loader-wrapper">
        <div id="loading-center-absolute">
          <div className="object" id="object_four" />
          <div className="object" id="object_three" />
          <div className="object" id="object_two" />
          <div className="object" id="object_one" />
        </div>
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div> */}
      {/* END LOADER */}
      {/* START HEADER */}

      {/* END HEADER */}{/* START SECTION BANNER */}
      <section className="section_breadcrumb bg_navy_blue" data-z-index={1} data-parallax="scroll" data-image-src="assets/images/home_banner_bg.png">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.1s" style={{ animationDelay: '1.1s', opacity: 1 }}>{termsdata.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_border">
              {termsdata.description}

              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="#" className="scrollup btn-default" style={{ display: 'none' }}><i className="ion-ios-arrow-up" /></a>
      <div className="spop-container spop--bottom-left" id="spop--bottom-left" />
      <Footer />
    </div>
  )
}
