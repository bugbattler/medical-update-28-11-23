import React, { useState } from "react";
import "./contact.css";
import shape_14 from "../images/shape_14.png";
import shape_5 from "../images/shape_5.png";
import shape_6 from "../images/shape_6.png";
import shape_8 from "../images/shape_8.png";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";
import author_11 from "../images/author_11.jpg";
import shape_23 from "../images/shape_23.png";
import shape_24 from "../images/shape_24.png";
import shape_19 from "../images/shape_19.png";
import reward from "../images/reward.png";
import shape_12 from "../images/shape_12.png";
import phone_call from "../images/phone_call.png";
import icon_pin from "../images/icon_pin.png";
import icon_email from "../images/icon_email.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    email: "",
    phone: "",
  });
  const handleInput = (e) => {
    const newObj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newObj);
  };
  const [showModal, setshowModal] = useState(false);
  const [hidebtn, sethidebtn] = useState(false);

  const [formValue, setFormValue] = useState(data);
  const [errors, setErrors] = useState(false);
  const handleEnquiryForm = (e) => {
    e.preventDefault();
    setErrors(Validation(formValue));
    console.log(data);
    console.log("ok");
    if (data.fname !== "" && data.email !== "" && data.phone !== "") {
      axios
        .post("https://medical-cdt6.onrender.com/api/Contact/create", data)
        .then((response) => {
          const contact = response.data;
          console.log(contact);
          localStorage.setItem('Contact', JSON.stringify(contact));
          alert("Form Submitted");
          setshowModal(false);
        })
        .catch((error) => {
          console.error("", error);
        });
    }
  };

  const Validation = (values) => {
    const errors = {};
    const regex = "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$";
    if (!values.fname) {
      errors.fname = "Name field is required ";
      setErrors(true);
    } else if (!formValue.fname.replace == "") {
      errors.fname = " Empty field are not allowed";
    }
    if (!values.email) {
      errors.email = "Email feild is required";
      setErrors(true);
    } else if (!formValue.email == "") {
      errors.name = " Empty field are not allowed";
    }
    if (!values.phoneNo) {
      errors.phone = "Phone number is required ";
      setErrors(true);
    } else if (values.phoneNo.length < 11) {
      errors.phone = "Phone number must be 10 digit  ";
      setErrors(true);
    } else if (!formValue.phoneNo == "") {
      errors.name = "Empty field are not allowed";
    }

    return errors;
  };

  return (
    <>
      <div className="">
        <div className="row course-main-page ">
          <div className="col-lg-6 my-course">
            <div class="page-banner-content contact">
              <ul class="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li class="active" style={{ fontWeight: 600 }}>
                  Contact
                </li>
              </ul>
              <h2 class="title">
                Contact<span> Us</span>
              </h2>
              <img class="shape_23 dash-shape" src={shape_23} alt="Shape" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-4">
                <div class="shape-icon-box">
                  {/* <img class="icon-shape-1  animation-right" src={shape_5} alt="Shape" /> */}

                  <div class="box-content d-none d-sm-block">
                    <div class="box-wrapper">
                      <img className="reward-icon" src={reward} />
                    </div>
                    <img class="icon-shape-2" src={shape_6} alt="Shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-sm-block">
                <img class="shape-author" src={author_11} alt="Shape" />
              </div>
              <div className="col-lg-4 d-none d-sm-block">
                <img class="shape-0" src={shape_24} alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-padding-02">
        <div class="container">
          <div class="section-title shape-01">
            <h2 class="main-title">
              {" "}
              Contact <span>Us</span>{" "}
            </h2>
          </div>

          <div className="row">
            <h5 className="contact-text">
              Ready to begin your journey into the world of healthcare and
              medical coding classes. Contact the Institute of Medical Coding
              today to learn more about our medical coding classes, both
              in-person and our convenient online medical coding classes. We are
              here to support you in achieving your career goals.
            </h5>
            <br></br>

            <h5 className="contact-text-2">
              Join us and become a vital part of the healthcare system through
              our top-notch medical coding classes
            </h5>
          </div>

          <div class="section section-padding">
            <div class="container">
              <h3 class="title text-center mb-5" style={{ fontSize: "30px" }}>
                Get in Touch{" "}
                <span
                  className=""
                  style={{ textDecoration: "underline", color: "green" }}
                >
                  With Us
                </span>
              </h3>

              <div class="contact-wrapper">
                <div class="row align-items-center">
                  <div class="col-lg-6">
                    <div class="contact-info">
                      {/* <img
                        class="shape animation-round"
                        src={shape_12}
                        alt="Shape"
                      /> */}
                      <div class="single-contact-info">
                        <div class="info-icon">
                          <img className="contact-icons" src={phone_call} />
                        </div>
                        <div class="info-content">
                          <h6 class="title">Phone No.</h6>
                          <p>
                            <a href="tel:7722073406">(+91) 7722073406</a>
                          </p>
                        </div>
                      </div>

                      <div class="single-contact-info">
                        <div class="info-icon">
                          <img className="contact-icons" src={icon_email} />
                        </div>
                        <div class="info-content">
                          <h6 class="title">Email Address.</h6>
                          <p>
                            <a href="mailto:Medicalcoding@gmail.com">
                              Medicalcoding@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>

                      <div class="single-contact-info">
                        <div class="info-icon">
                          <img className="contact-icons" src={icon_pin} />
                        </div>
                        <div class="info-content">
                          <h6 class="title">Office Address.</h6>
                          <p>Hinjewadi, Pune - 411057, Maharashtra, India.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    {/* <h3 class="title">Get in Touch <span className='' style={{ textDecoration: 'underline' }}>With Us</span></h3> */}

                    <div class="contact-form">
                      <h3 class="title">
                        Contact{" "}
                        <span
                          className=""
                          style={{ textDecoration: "underline" }}
                        >
                          Us
                        </span>
                      </h3>
                      <div class="form-wrapper">
                        {/* <form
                          id="contact-form"
                          action="https://htmlmail.hasthemes.com/humayun/edule-contact.php"
                          method="POST"
                        >
                          <div class="single-form">
                            <input type="text" name="name" placeholder="Name" />
                          </div>

                          <div class="single-form">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                            />
                          </div>

                          <div class="single-form">
                            <input
                              type="text"
                              name="Phone"
                              placeholder="Phone"
                            />
                          </div>

                          <div class="single-form">
                            <textarea
                              name="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                          <p class="form-message"></p>
                          <div class="single-form">
                            <button class="btn btn-primary btn-hover-dark w-100">
                              Send Message <i class="flaticon-right"></i>
                            </button>
                          </div>
                        </form> */}
                        <form action="" class="form-container">
                          <div className="">
                            <label>
                              <b>
                                Full name<span className="text-danger">*</span>
                              </b>
                            </label>
                            <input
                              type="text"
                              placeholder="Full name"
                              name="fname"
                              onChange={(e) => {
                                setData({ ...data, fname: e.target.value });
                                handleInput(e);
                              }}
                            />

                            {errors.fname && data.fname.length <= 0 ? (
                              <p className="text-danger" style={{ fontSize: "14px" }}>
                                {errors.fname}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className="">
                            <label>
                              <b>
                                Email<span className="text-danger">*</span>
                              </b>
                            </label>
                            <input
                              type="text"
                              placeholder="Email"
                              name="email"
                              onChange={(e) => {
                                setData({ ...data, email: e.target.value });
                                handleInput(e);
                              }}
                            />
                            {errors.email && data.email.length <= 0 ? (
                              <p className="text-danger" style={{ fontSize: "14px" }}>
                                {errors.email}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className="">
                            <label>
                              <b>
                                Phone no.<span className="text-danger">*</span>
                              </b>
                            </label>
                            <input
                              type="text"
                              placeholder="Phone no."
                              name="phone"
                              onChange={(e) => {
                                setData({ ...data, phone: e.target.value });
                                handleInput(e);
                              }}
                            />
                            {errors.phone && data.phone.length <= 0 ? (
                              <p className="text-danger" style={{ fontSize: "14px" }}>
                                {errors.phone}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>

                          <button
                            type="submit"
                            class="btn Loginbtn"
                            // data-bs-dismiss="modal"
                            // aria-label="Close"
                            onClick={(e) => {
                              handleEnquiryForm(e);
                            }}
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="contact-map-wrapper mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5092320355047!2d73.71510837499333!3d18.596151666861545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb98e08c485%3A0x88605aadb7c213a6!2sGera&#39;s%20Imperium%20Rise!5e0!3m2!1sen!2sin!4v1700911451474!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="section section-padding download-section">
        <div class="app-shape-1"></div>
        <div class="app-shape-2"></div>
        <div class="app-shape-3"></div>
        <div class="app-shape-4"></div>

        <div class="container">
          <div class="download-app-wrapper mt-n6">
            <div class="section-title section-title-white">
              <h5 class="sub-title">Ready to start?</h5>
              <h2 class="main-title">
                Download our mobile app. for easy to start your course.
              </h2>
            </div>

            <img class="shape-1 animation-right" src={shape_14} alt="Shape" />

            <div class="download-app-btn">
              <ul class="app-btn">
                <li>
                  <a href="#">
                    <img src={google_play} alt="Google Play" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={app_store} alt="App Store" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
