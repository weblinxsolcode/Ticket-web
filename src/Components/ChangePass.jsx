import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { Link } from 'react-router-dom'
import Header from './Elements/Header'
import config from '../config'
import axios from 'axios'
import Footer from './Elements/Footer'
import { useHistory ,useParams } from 'react-router-dom'


export default function ChangePass() {
  let { email } = useParams();
  const scroll = () => {
    window.scrollTo(0,0); 

    console.log("scroll value reset")
  }
  const history = useHistory()
  const [code, setcode] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [error, seterror] = useState("")
  const [loader, setloader] = useState(0)
  
  
  const passwordChange = async () => {
     


   


    if (password.split("").length < 6) {
      seterror({ variant: "danger", data: "Password should contain 6 letters" })
    } else {
      if (confirmPassword != password) {
        seterror({ variant: "danger", data: "Password Not Match" })
      }
      else {
        setloader(1)
        await axios.post(`${config.baseURL}/verify_forget_password.php`, {
          email, 
          code,
          password
        }).then((result) => {
          let getData = result.data
          if (getData.status == 'true') {
            // alert("hello")
            // seterror({ variant: "success", data:getData.data })
          //  alert("ok")
           history.push('/login')
            // hello();
          }else if (getData.status == 'false'){
              seterror({ variant: "danger", data:getData.data })
          }
          // console.log(getData.status);
        
          // if (getData.status == 'false') {
          //   seterror({ variant: "danger", data:getData.data })

          // }
         
        })
        setloader(0)
      }
    }
  }
  const hello =() =>{
    history.push('/')
  }
  useEffect(() => {
    seterror({ variant: "success",data:"Account Verification Code has been sent to your email address" });
    scroll();
    // hello();
  }, [])
  
return (
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
    {/* END LOADER */}
    {/* START HEADER */}
    {/* END HEADER */}
    {/* START SECTION BANNER */}
    <section className="section_breadcrumb bg_navy_blue" data-z-index={1} data-parallax="scroll" data-image-src="assets/images/home_banner_bg.png">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="banner_text text-center">
              <h1 className="animation  animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.1s" style={{ animationDelay: '1.1s', opacity: 1 }}>Change Password</h1>
              <ul className="breadcrumb bg-transparent justify-content-center animation m-0 p-0 animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.3s" style={{ animationDelay: '1.3s', opacity: 1 }}>
                <li><a href="/">Home</a> </li>
                <li><span>Change Password</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* END SECTION BANNER */}
    {/* START SECTION SIGN UP */}
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="authorize_box">
              <div className="title_default_dark title_border text-center">
                <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Change Password</h4>

                {/* <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Bs kuch bhi nhi likho</p> */}
              </div>
              <div className="field_form authorize_form">
                {error != "" &&
                  <div className={"alert alert-" + error.variant} role="alert">
                    {error.data}
                  </div>
                }
                <div >
                  <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" style={{ animationDelay: '0.7s', opacity: 1 }}>
                    <input onChange={(e) => setcode(e.target.value)} type="number" className="form-control" required placeholder="Enter Otp Code" name="code" />
                  </div>
                  <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" style={{ animationDelay: '0.7s', opacity: 1 }}>
                    <input onChange={(e) => setpassword(e.target.value)} type="password" className="form-control" required placeholder="Password" name="password_1" />
                  </div>
                  <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: 1 }}>
                    <input onChange={(e) => setconfirmPassword(e.target.value)} type="password" className="form-control" required placeholder="Confirm Password" name="password_2" />
                  </div>
                  <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.9s" style={{ animationDelay: '0.9s', opacity: 1 }}>

                  </div>
                  <div className="form-group col-md-12 text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: '1s', opacity: 1 }}>
                    <button className="btn btn-default btn-radius" type="submit"  onClick={() => passwordChange()}>
                      Submit
                      {
                        loader == 1 &&
                        <div className="spinner-border spinner-border-sm ms-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      }
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="divider small_divider" />
            <div className="text-center">
              <span className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: '1s', opacity: 1 }}>Already have an account? <Link to="/login"> Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* END SECTION SIGN UP */}
    {/* START FOOTER SECTION */}

    {/* END FOOTER SECTION */}
    <a href="#" className="scrollup btn-default" style={{ display: 'none' }}><i className="ion-ios-arrow-up" /></a>
    <Footer />
  </div>
)
}
