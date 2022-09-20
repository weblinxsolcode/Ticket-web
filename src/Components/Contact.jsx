import React, { useState, useEffect } from 'react'
import axios from "axios";
import config from '../config'
// import { Link } from 'react-router-dom'
const Contact = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');
    const [links, setlinks] = useState([])
    const [error, seterror] = useState("")
    const getBannerdata = async () => {
        await axios.post(`${config.baseURL}/get_admin.php`)
          .then(async (response) => {
            setlinks(await response.data[0]);
            console.log(links.phone)
          })
      }
    const contactus = () => {
        if (name.length < 1) {
            seterror({ variant: "danger", data: "Please Type a Name" })
        } else {
            if (email.length < 1) {
                seterror({ variant: "danger", data: "Please Type a Email" })
            } else {
                if (subject.length < 1) {
                    seterror({ variant: "danger", data: "Please Type a Subject" })
                } else {
                    if (message.length < 1) {
                        seterror({ variant: "danger", data: "Please Type a Messgae " })
                    } else {
                        axios.post(`${config.baseURL}/link.php`, {
                            name: name,
                            email: email,
                            message: message,
                            subject: subject
                        })
                            .then(function (response) {
                                console.log(response.data.status)
                                if (response?.data.status == "true") {
                                    seterror({ variant: "success", data: "Thanks For Contact Us " });
                                    setemail('');
                                    setmessage('');
                                    setname('');
                                    setsubject('');
                                }

                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }
            }
        }


    }

    useEffect(() => {
        getBannerdata();
    }, [])

    return (
        <>

            <section id="contact" className="contact_section small_pt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 pr-0 res_md_pr_15 pe-lg-0">
                            <div className="bg_navy_blue contact_box animation" data-animation="fadeInLeft" data-animation-delay="0.1s">
                                <div className="title_default_light title_border">
                                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Contact With Us
                                    </h4>
                                    <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Our office is
                                        located in a beautiful building and garden and fast growing city.</p>
                                </div>
                                <ul className="list_none contact_info mt-margin ps-0">
                                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                        <i className="ion-ios-location" />
                                        <div className="contact_detail"> <span>Address</span>
                                            <p>{links.address}</p>
                                        </div>
                                    </li>
                                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                                        <i className="ion-android-call" />
                                        <div className="contact_detail"> <span>Phone</span>
                                            <p>{links.phone}</p>
                                        </div>
                                    </li>
                                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                        <i className="ion-ios-email" />
                                        <div className="contact_detail"> <span>Email</span>
                                            <p><a className="text-white" href="mailto:cryptossky@yahoo.com">{links.email}</a></p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="contct_follow large_space">
                                    <span className="text-uppercase animation" data-animation="fadeInUp" data-animation-delay="0.2s">Follow Us</span>
                                    <ul className="list_none social_icon ps-0">
                                        <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a target="_blank" href={links.facebook}><i className=" fa-brands fa-facebook" /></a></li>
                                        <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a target="_blank" href={links.twitter}><i className=" fa-brands fa-twitter" /></a></li>
                                        <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a target="_blank" href={links.instagram}><i className=" fa-brands fa-instagram" /></a></li>
                                        <li className="animation" data-animation="fadeInUp" data-animation-delay="0.7s"><a target="_blank" href={links.youtube}><i className=" fa-brands fa-youtube" /></a></li>
                                        {/* <li className="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a target="_blank" href={links.linkedin}><i className=" fa-brands fa-linkedin" /></a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 pl-0 res_md_pl_15 ps-lg-0">
                            <div className="bg_navy_blue_dark contact_box animation" data-animation="fadeInRight" data-animation-delay="0.1s">
                                <div className="title_default_light title_border">
                                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Leave a Message
                                    </h4>
                                </div>
                                <div className="form_field">
                                    <div className="row">
                                        <div>
                                            {error != "" &&
                                                <div className={"alert alert-" + error.variant} role="alert">
                                                    {error.data}
                                                </div>
                                            }
                                        </div>
                                        <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} required="required" placeholder="Enter Name *" id="first-name" className="form-control" name="name" />
                                        </div>
                                        <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} required="required" placeholder="Enter Email *" id="email" className="form-control" name="email" />
                                        </div>
                                        <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                            <input type="text" required="required" value={subject} onChange={(e) => setsubject(e.target.value)} placeholder="Enter Subject" id="subject" className="form-control" name="subject" />
                                        </div>
                                        <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="1s">
                                            <textarea value={message} onChange={(e) => setmessage(e.target.value)} required="required" placeholder="Message *" id="description" className="form-control" name="message" rows={2} defaultValue={""} />
                                        </div>
                                        <div className="col-md-12 text-center animation" data-animation="fadeInUp" data-animation-delay="1.2s">
                                            <button onClick={() => contactus()} className="btn btn-default btn-radius"   >Submit <i className="ion-ios-arrow-thin-right" /></button>
                                        </div>

                                        <div className="col-md-12">
                                            <div id="alert-msg" className="alert-msg text-center" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact