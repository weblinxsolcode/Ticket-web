import React from 'react'
import { Helmet } from "react-helmet";

export default function Footer() {



  return (
    <>
      <footer>
        <div className="top_footer bg_navy_blue" data-z-index={1} data-parallax="scroll" data-image-src="assets/images/footer_bg.png">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 text-center">
                <div className="footer_logo animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  <a href="#home_section" className="page-scroll">
                    <img alt="logo" src="assets/images/footer_logo.png" />
                  </a>
                </div>
                <div className="divider small_divider" />
                <ul className="footer_link_s2 ps-0">
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a className="page-scroll text-decoration-none" href="#about">About</a></li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a className="page-scroll text-decoration-none" href="#plans">Our Plans</a></li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.7s"><a className="page-scroll text-decoration-none" href="#roadmap">Road Map</a></li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a className='text-decoration-none' href="shop.html">Shop</a></li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.9s"><a className="page-scroll text-decoration-none" href="#contact">Contact</a></li>
                </ul>
                <div className="divider small_divider" />
                <p className="copyright animation" data-animation="fadeInUp" data-animation-delay="0.4s">Copyright
                  ©  All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Helmet>
        <script src="assets/js/jquery-1.12.4.min.js"></script>
        <link rel="stylesheet" href="assets/owlcarousel/css/owl.owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        {/* <link rel="stylesheet" href="assets/owlcarousel/css/owl.carousel.min.css" /> */}
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        {/* <script src="assets/owlcarousel/js/owl.carousel.min.js"></script> */}
        <script src="assets/js/magnific-popup.min.js"></script>
        <script src="assets/js/waypoints.min.js"></script>
        <script src="assets/js/parallax.js"></script>
        <script src="assets/js/bootstrap.bundle.js"></script>
        <script src="assets/js/jquery.countdown.min.js"></script>
        <script src="assets/js/particles.min.js"></script>
        <script src="assets/js/jquery.dd.min.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        <script src="assets/js/spop.min.js"></script>
        <script src="assets/js/notification.js"></script>
        <script src="assets/js/scripts.js"></script>
      </Helmet>
    </>
  )
  }
