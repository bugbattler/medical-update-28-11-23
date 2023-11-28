import React from "react";
import "./about.css";
import shape_14 from "../images/shape_14.png";
import shape_5 from "../images/shape_5.png";
import shape_6 from "../images/shape_6.png";
import shape_8 from "../images/shape_8.png";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";
import author_11 from "../images/author_11.jpg";
import shape_23 from "../images/shape_23.png";
import shape_24 from "../images/shape_24.png";
import reward from "../images/reward.png";
import about from "../images/about.jpg";
import logoicon from "../images/logoicon.png";
import icon_training from "../images/icon_training.png";
import icon_increase from "../images/icon_increase.png";
import icon_coding from "../images/icon_coding.png";
import shape_12 from "../images/shape_12.png";
import shape_013 from "../images/shape_013.svg";
import author_01 from "../images/author_01.jpg";
import author_02 from "../images/author_02.jpg";
import author_03 from "../images/author_03.jpg";
import author_04 from "../images/author_04.jpg";
import author_05 from "../images/author_05.jpg";
import author_06 from "../images/author_06.jpg";
import author_07 from "../images/author_07.jpg";
import author_08 from "../images/author_08.jpg";
import author_09 from "../images/author_09.jpg";
import author_10 from "../images/author_10.jpg";
import star from "../images/star.png";
import teacher2 from "../images/Equity-in-the-Classroom.jpg";
import { Link } from "react-router-dom";
import pic_medical_02 from '../images/pic_medical_02.jpg'
import pic_medical_03 from "../images/pic_medical_03.jpg";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
  return (
    <>
      <div className="about-banner">
        <div className="row course-main-page ">
          <div className="col-lg-6 my-course">
            <div class="page-banner-content">
              <ul class="breadcrumb">
                <li>
                  <Link to="/" className="text-white">Home</Link>
                </li>
                <li class="active" style={{ fontWeight: 600 }}>
                  About
                </li>
              </ul>
              <h2 class="title text-white">
                <span className="text-white"> About Medical Classes</span>
              </h2>
              {/* <img class="shape_23" src={shape_23} alt="Shape" /> */}
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
                {/* <img class="shape-author" src={author_11} alt="Shape" /> */}
              </div>
              <div className="col-lg-4 d-none d-sm-block">
                {/* <img class="shape-0 " src={shape_24} alt="Shape" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content-down ptb-50">
        <div class="section">
          <div class="section-padding-02 ">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="about-images">
                    <div class="images">
                      <img src={teacher2} alt="About" />
                    </div>

                    <div class="about-years">
                      <div class="years-icon">
                        <img src={logoicon} alt="About" />
                      </div>
                      <p>
                        <strong>28+</strong> Years Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="about-content mt-5">
                    <h5 class="sub-title">Our Mission
                    </h5>
                    <h2 class="main-title">
                      You can join with the institute of medical classes and
                      upgrade your skill for your <span>bright future.</span>
                    </h2>
                    <p className="mt-1 " style={{fontSize:"18px"}}>
                      At Institute of medical coding, we are dedicated to providing the highest quality
                      education in the field of medical coding. Our mission is to empower individuals with
                      the knowledge and skills necessary to excel in the dynamic and critical world of
                      healthcare coding.
                    </p>
                    {/* <a href="#" class="btn btn-primary btn-hover-dark">Start A Course</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-padding-02 mt-n6 course-section ptb-50">
            <div class="container ">
              <div class="about-items-wrapper">
                <div class="row justify-content-center">
                  <div class="col-lg-4">
                    <div class="about-item">
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <img src={icon_training} />
                        </div>
                        <div class="item-title">
                          <h3 class="title">Our Story
                          </h3>
                        </div>
                      </div>
                      <p className="" style={{ fontSize: 16 }}>
                        Our institution's story began with a vision to bridge the gap in the medical coding
                        industry. With a belief in the transformative power of education, we set out to
                        provide comprehensive, real-world training to aspiring healthcare coders. Over
                        the years, we've grown into a center of excellence, recognized for our unwavering
                        dedication to student success.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="about-item">
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <img src={icon_coding} alt="About" />
                        </div>
                        <div class="item-title">
                          <h3 class="title">
                            {" "}
                            Our Expert Faculty

                          </h3>
                        </div>
                      </div>
                      <p style={{ fontSize: 16 }}>
                        At the heart of our institution lies our exceptional faculty, a team of industry
                        professionals who bring a wealth of practical experience and expertise to the
                        classroom. They are more than educators; they are mentors, guiding and
                        nurturing your coding journey. Our faculty's commitment to your success is
                        reflected in the dedication to your growth .
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="about-item">
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <img src={icon_increase} alt="About" />
                        </div>
                        <div class="item-title">
                          <h3 class="title"> Our Approach</h3>
                        </div>
                      </div>
                      <p style={{ fontSize: 16 }}>
                        We firmly believe that the best learning happens through practical application.
                        Our approach is rooted in hands-on training, emphasizing real-world problemsolving and skill development. We are committed to ensuring that you are not
                        just prepared for exams but ready to tackle the challenges of the healthcare
                        coding field with confidence.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="about-item">
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <img src={icon_training} />
                        </div>
                        <div class="item-title">
                          <h3 class="title"> Certification Excellence
                          </h3>
                        </div>
                      </div>
                      <p className="" style={{ fontSize: 16 }}>
                        We understand the importance of recognized certifications in 
                        career. Our programs are strategically designed to equip the knowledge
                        and skills . Whether it's the Certified
                        Professional Coder (CPC) or the Certified Coding Specialist (CCS), we're dedicated
                        to preparing you for success in the world of healthcare coding.


                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="about-item">
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <img src={icon_coding} alt="About" />
                        </div>
                        <div class="item-title">
                          <h3 class="title">
                            {" "}
                            Career Support


                          </h3>
                        </div>
                      </div>
                      <p style={{ fontSize: 16 }}>
                        Your journey with us doesn't conclude with graduation. We are here to support
                        your career aspirations. Our career support services are tailored to help you
                        secure the right job, and they include job placement assistance, resume building,
                        and interview preparation. We take pride in watching our students thrive in their
                        chosen careers.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="section-padding-02 ">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="about-content">
                    <h5 class="sub-title">Welcome to Medical Classes.</h5>
                    <h2 class="main-title">
                      Your Gateway to a Promising Career in Medical Coding
                      Classes
                    </h2>
                    <p className=""  style={{fontSize:"18px"}}>
                      Join us at Institute of medical coding and take the first step towards a fulfilling career
                      in medical coding. Contact us today to learn more about our programs, enrolment
                      process, and how we can help you achieve your professional goals. We look forward
                      to being your partner on your journey to success in medical coding.
                    </p>
                    {/* <a href="#" class="btn btn-primary btn-hover-dark">Start A Course</a> */}
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="about-images">
                    <div class="images">
                      <img src={about} alt="About" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section section-padding-02">
            <div class="container">
              <div class="call-to-action-wrapper">
                <img
                  class="cat-shape-01 animation-round"
                  src={shape_12}
                  alt="Shape"
                />
                <img class="cat-shape-02" src={shape_013} alt="Shape" />
                <img
                  class="cat-shape-03 animation-round"
                  src={shape_12}
                  alt="Shape"
                />

                <div class="row align-items-center ">
                  <div class="col-md-6">
                    <div class="section-title shape-02">
                      <h5 class="sub-title">Become A Instructor</h5>
                      <h2 class="main-title">
                        You can join with Medical Classes as{" "}
                        <span>a instructor?</span>
                      </h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="call-to-action-btn">
                      <Link
                        class="btn btn-primary btn-hover-dark"
                        to="/Contact"
                        onClick={(e) => {
                          scrollToTop();
                        }}
                      >
                        Drop Information
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section section-padding mt-n1">
            <div class="container">
              <div class="section-title shape-03 text-center">
                {/* <h5 class="sub-title">Team Member’s</h5> */}
                <h2 class="main-title">
                  Our Commitment to <span> Excellence</span>
                </h2>
              </div>

              <div class="team-wrapper">
                {/* <div class="row row-cols-lg-5 row-cols-sm-3 row-cols-2 "> */}
                <div class="row ">

                  <div class="col-md-6">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={pic_medical_03} alt="Author" />
                      </div>
                      <div class="team-content">

                        <h4 class="name"> High Standards</h4>
                        <p>We maintain the highest educational standards, ensuring
                          our curriculum stays up-to-date with the ever-evolving healthcare industry.</p>

                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={pic_medical_02} alt="Author" />
                      </div>
                      <div class="team-content">

                        <h4 class="name"> Industry Leaders</h4>
                        <p>Our aim is to produce highly skilled and sought-after
                          medical coders who set the benchmark for excellence in the field.</p>
                      </div>
                    </div>
                  </div>

                  {/* 
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_10} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Rodney Terry</h4>
                        <span class="designation">MBBS, Instructor</span>
                      </div>
                    </div>
                  </div> */}
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

                <img
                  class="shape-1 animation-right"
                  src={shape_14}
                  alt="Shape"
                />

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
        </div>
      </div>
    </>
  );
};

export default About;
