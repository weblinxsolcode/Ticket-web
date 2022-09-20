import React, { useEffect, useState } from 'react'
import Header from './Elements/Header'
import Footer from './Elements/Footer'
import axios from 'axios';
import config from '../config'
import { Link } from 'react-router-dom';
import SliderHome from './SliderHome';
import Contact from './Contact';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
export default function Home() {

  const [bannerdata, setbannerdata] = useState([]);
  const [plans, setplans] = useState([]);
  const [roadmapdata, setroadmapdata] = useState([]);
  const [totaluser, settotaluser] = useState()
  const getBannerdata = async () => {
    axios.post(`${config.baseURL}/banner-content.php`)
      .then(async (response) => {
        setbannerdata(await response?.data[0]);
        // console.log(bannerdata)
      })
  }
  async function getUserData() {
    try {
      const response = await axios.get(`${config.baseURL}/get_user_desposit.php`);
      console.log(response?.data.data);
      settotaluser(response?.data.data);
    }
    catch (error) {
      console.log(error);
    }
  }
  const totaluserfun = async () => {
     axios.get(`${config.baseURL}/get_user_desposit.php`)
    .then(async (response) => {
      settotaluser(await response?.data);

    })
  }

  const getPlans = async () => {
    axios.post(`${config.baseURL}/plans.php`)
      .then(async (response) => {
        setplans(await response?.data)
        // console.log(plans)
      })
  }
  const getRoadmap = async () => {
    axios.post(`${config.baseURL}/roadmap-content.php`)
      .then(async (response) => {
        setroadmapdata(await response?.data[0])
        // console.warn(roadmapdata)
      })
  }
  useEffect(() => {
    getPlans();
    getBannerdata();
    getRoadmap();
    getUserData();
  }, [])



  return (
    <>

      <div>
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
        <section id="home_section" className="section_banner bg_navy_blue banner_full_height" data-z-index={1} data-parallax="scroll" data-image-src="/assets/images/banner_bg2.png">
          <Header />
          <div id="banner_bg_effect" className="banner_effect" />
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 col-sm-12 order-first">
                <div className="banner_text text-center">
                  <h3 className="animation" data-animation="fadeInUp" data-animation-delay="0.8s"> {bannerdata?.title}</h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
                <div className="banner_text text_md_center">
                  <h1 className="animation" data-animation="fadeInUp" data-animation-delay="1.1s">
                    {ReactHtmlParser(bannerdata?.sub_title)}
                    {/* {bannerdata?.sub_title} */}
                  </h1>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="1.3s">
                    {ReactHtmlParser(bannerdata?.description)}

                    {/* {bannerdata?.description} */}

                  </p>
                  <div class="row ">
                    <div class=" col-sm-6 col-xs-12">
                      <div class="box_counter text-center res_sm_mb_20">
                        <h3 class="counter my-2 animation" data-animation="fadeInUp" data-animation-delay="0.3s">255{totaluser?.user}</h3>
                        <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Total Users</p>
                      </div>
                      {/* 6 */}
                    </div>
                    <div class=" col-sm-6 col-xs-12">
                      <div class="box_counter text-center res_sm_mb_20">
                        <h3 class="counter my-2 animation" data-animation="fadeInUp" data-animation-delay="0.3s">4,70,00
                          ,{totaluser?.desposit}</h3>
                        {/* 200,00 */}
                        <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Total Deposits</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="btn_group animation" data-animation="fadeInUp" data-animation-delay="1.4s">
                    <a href="#contact" className="btn btn-default btn-radius nav-link ">Contact Us <i className="ion-ios-arrow-thin-right" /></a>
                    <a href="#pricing" className="btn btn-border btn-radius">Chose Plan Now! <i className="ion-ios-arrow-thin-right" /></a>
                  </div> */}
                  <div id="whitepaper" className="team_pop mfp-hide">
                    <div className="row m-0">
                      <div className="col-md-7">
                        <div className="pt-3 pb-3">
                          <div className="title_blue_dark title_border">
                            <h4>Download Whitepaper</h4>
                            <p>A purely peer-to-peer version of electronic cash would allow online
                              payments to be sent directly from one party to another without going
                              through a financial institution.Digital signatures provide part of the
                              solution, but the main benefits are lost if a trusted third party is
                              still required to prevent double-spending.</p>
                            <p>The network timestamps transactions by hashing them into an ongoing chain
                              of hash-based proof-of-work, forming a record that cannot be changed
                              without redoing the proof-of-work.</p>
                            <a href="#" className="btn btn-default btn-radius">Download Now <i className="ion-ios-arrow-thin-right" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <img className="pt-3 pb-3" src="/assets/images/whitepaper2.png" alt="whitepaper2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 order-first">
                <div className="banner_image_right res_md_mb_50 res_xs_mb_30 animation" data-animation-delay="1.5s" data-animation="fadeInRight">
                  <img alt="banner_vector4" src="/assets/images/banner_img4.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="ripple_effect_left_bottom">
            <div className="circle_bg1 circle_bg_color1">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="ripple_effect_right_top">
            <div className="circle_bg1 circle_bg_color1">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>
        {/* END SECTION BANNER */}
        {/* START SECTION ABOUT US */}
        <section id="about" className="pb-0" data-parallax="scroll" data-image-src="/assets/images/about_bg2.png">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="title_blue_dark title_border text-center">
                  {/* <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">About The Cryptossky
                  </h4>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Cryptossky will
                    provide a GPF (Global Protection Funds) to minimize any crisis with the international Real
                    Estate, Mineral mining and cryptocurrency market. We believe instead of creating a global
                    fund to share with the users have been bringing to us extra referees, we want to use this
                    fund to protect your investment. This fund will be increase in every deposit a 10%, but you
                    balance will be the total investment you do, as every investment will be blocked for 180 or 360
                    days. This will make this fund bigger every day. Investor will see the counter on the home page once login in.</p>
                  <p className="animation mb-0" data-animation="fadeInUp" data-animation-delay="0.8s">Another very attractive
                    benefit for users is the possibility to win an apartment in Turkey or United Arabic
                    Emirates. Every six months we will provide one property in combination with a Real Estate
                    Group in Dubai (Conditions Apply).
                  </p> */}
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s">

                    <img src={process.env.PUBLIC_URL + "./assets/images/logo-cryptossky.png"} alt="Cryptoskky" />
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10 offset-1">
                <div className="divider small_divider" />
                <div className="video_wrap animation d-flex justify-content-center" data-animation="fadeInUp" data-animation-delay="0.4s">
                  <img src="assets/images/video_img2.jpg" alt="video_img2" />
                  {/* <div className="video_text">
                    	<a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI" className="video">
                        	<i className="ion-ios-play-outline gradient_box"></i>
                        	<span>How It Work</span>
                        </a>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg_navy_blue video_bg" />
        </section>

        {/* END SECTION SALE */}
        <section id="roadmap" className="bg_navy_blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title_default_light text-center">
                  <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Road Map</h4>
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Cryptossky works with the finest in their fields, who are willing to go above and beyond to give you with the highest investment returns.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row roadmap_list  small_space align-items-end">
              <div className="col-lg">
                <div className="single_roadmap roadmap_done">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {/* {roadmapdata.date_1} */}
                    {ReactHtmlParser(roadmapdata.date_1)}

                  </h6>
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.3s" style={{ animationDelay: '0.3s', opacity: 1 }}>
                    {ReactHtmlParser(roadmapdata.description_1)}

                    {/* {roadmapdata.description_1} */}
                  </p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap roadmap_done">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {/* {roadmapdata.date_2} */}
                    {ReactHtmlParser(roadmapdata.date_2)}
                  </h6>
                  <p className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {ReactHtmlParser(roadmapdata.description_2)}

                    {/* {roadmapdata.description_2} */}
                  </p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {/* {roadmapdata.date_3} */}
                    {ReactHtmlParser(roadmapdata.date_3)}

                  </h6>
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {/* {roadmapdata.description_3} */}
                    {ReactHtmlParser(roadmapdata.description_3)}

                  </p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {/* {roadmapdata.date_4} */}
                    {ReactHtmlParser(roadmapdata.date_4)}

                  </h6>
                  <p className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {ReactHtmlParser(roadmapdata.description_4)}

                    {/* {roadmapdata.description_4} */}
                  </p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {ReactHtmlParser(roadmapdata.date_5)}

                    {/* {roadmapdata.date_5} */}
                  </h6>
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {ReactHtmlParser(roadmapdata.description_5)}

                    {/* {roadmapdata.description_5} */}
                  </p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {ReactHtmlParser(roadmapdata.date_5)}
                    {/* {roadmapdata.date_6} */}
                  </h6>
                  <p className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                    {ReactHtmlParser(roadmapdata.description_6)}
                    {/* {roadmapdata.description_6} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* START SECTION PRICING TABLE- */}
        <section id="plans">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title_default_dark title_border text-center">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Choose Your Plan
                  </h4>
                </div>
              </div>
            </div>
            <div className="row small_space">
              {
                plans.map((data) => (
                  <div className="col-lg-4 col-md-4">
                    <div className="pricing_box text-center res_sm_mt_20">
                      <div className="pr_title gradient_box2">
                        <h3 className='text-capitalize'>{data.title}</h3>
                        <div className="price_tage">
                          <h3>{data.amount} USDT</h3>
                          <span>{data.days} Days</span>
                        </div>
                      </div>
                      <div className="pr_content">
                        <ul className="list_none ps-0">
                          <li>{data.days} Days locked</li>
                          <li>{data.description}</li>
                          <li>{data.profit_ratio} year profit</li>
                        </ul>
                      </div>
                      <div className="pr_footer">
                        <Link to="/deposit" className="btn btn-default btn-radius">Select Plan Now</Link>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
            {/* <div className="row">
              <div className="col-md-12">
                <p className="mb-1"><strong>Note:</strong> Any plan Basic or Standard can be withdrawal after 10 days
                  with a 10% charge.</p>
                <ul className="pl-4">
                  <li>Gold and Diamond plan withdrawal during the six first months will be charged with 1% and for
                    the next six months will be charge with 0.5%</li>
                  <li>User are allowed to withdrawal one time a day any time except from 00.00 to 04.00 am.</li>
                  <li>Any withdrawal of profit or plan expired will be charged with 1%.</li>
                  <li>The minimum amount to withdrawal is 20USDT.</li>
                  <li>User can have a maximum of 3 plans, only one in every level.</li>
                </ul>
              </div>
            </div> */}
          </div>
        </section>
        {/* END SECTION PRICING TABLE- */}
        {/* START SECTION TEAM */}
        <section id="team" className="bg_navy_blue team_box_s2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title_default_light title_border text-center">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Lotto Prize</h4>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Certainly, we want our investors and users get a beautiful experience in cryptossky.com and despite the actual economic panorama we do the effort in Real Estate for you get a better life by the mean of win a home, completed furniture with garage, swimming pool for summer and for winter, sauna, hammam, gym, garden and barbeque area.</p>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Every six months you have a chance to win a home in four different touristic places: Alanya, beside Mediterranean Sea, (Turkey). Samsun, beside Black see, (Turkey). Dubai (UAE) and Kerala (India)
                    To access to the draw, you must have at least one plan in any plan category. You can buy a maximum of 10 tickets per user. </p>
                </div>
                <div className="text-center"><a href="login.html" className="btn btn-default btn-radius">REGISTER NOW TO JOIN THE DRAW </a></div>
              </div>
            </div>
          </div>
        </section>
        {/* END SECTION TEAM */}
        {/* START SECTION TESTIMONIAL */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title_default_dark title_border text-center">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Our Happy Clients
                  </h4>
                </div>
              </div>
            </div>
            <SliderHome />
          </div>
        </section>
        {/* END SECTION TESTIMONIAL */}
        {/* START SECTION CONTACT */}
        <Contact />
        <a href="#" className="scrollup btn-default" style={{ display: 'none' }}><i className="ion-ios-arrow-up" /></a>

        {/* END SECTION CONTACT */}      </div>
      <Footer />
    </>
  )
}
