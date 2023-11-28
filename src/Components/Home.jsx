import React, { useEffect, useState } from "react";
import "./home.css";
import slider_1 from "../images/slider_1.png";
import medical_01 from "../images/medical_01.jpeg";
import medical_04 from "../images/medical_04.avif";
import medical_02 from "../images/medical_02.jpg";
import courses_01 from "../images/courses_01.jpg";
import author_01 from "../images/author_01.jpg";
import author_06 from "../images/author_06.jpg";
import shape_6 from "../images/shape_6.png";
import shape_14 from "../images/shape_14.png";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";
import star from "../images/star.png";
import author_07 from "../images/author_07.jpg";
import quote from "../images/quote.png";
import axios from "axios";
import about from "../images/about.jpg";
import logoicon from "../images/logoicon.png";
import basic_medical_coding from "../images/medical-coding.jpg";
import advanced_coding from "../images/medical-advanced-coding.jpg";
import certification from "../images/certification.jpg";
import specialization from "../images/specialization.jpg";
import online_learning from "../images/online.avif";
import skill from "../images/skill.jpg";
import Continuous from "../images/continue.webp";
import teacher1 from "../images/teacher-student.jpg";
import teacher2 from "../images/Equity-in-the-Classroom.jpg";
import graduation from "../images/graduation.jpg";
import sundramm from "../images/sundramm.jpeg"

import { Link } from "react-router-dom";

const Home = () => {
  const [course_data, setCourseData] = useState([]);
  const [showModal, setshowModal] = useState(false);

  const [formValue, setFormValue] = useState();
  const [errors, setErrors] = useState(false);

  // console.log(54, course_data);
  const handleInput = (e) => {
    const newObj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newObj);
  };

  const Validation = (values) => {
    const errors = {};
    const regex =
      "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$";
    if (!values.name) {
      errors.name = "Name field is required ";
      setErrors(true);
    } else if (!formValue.name.replace == "") {
      errors.name = " Empty field are not allowed";
    }
    if (!values.email) {
      errors.email = "Email feild is required";
      setErrors(true);
    } else if (!formValue.email == "") {
      errors.name = " Empty field are not allowed";
    }
    if (!values.phoneNo) {
      errors.phoneNo = "Phone number is required ";
      setErrors(true);
    } else if (values.phoneNo.length < 11) {
      errors.phoneNo = "Phone number must be 10 digit  ";
      setErrors(true);
    } else if (!formValue.phoneNo == "") {
      errors.name = "Empty field are not allowed";
    }

    return errors;
  };
  
  useEffect(() => {
    axios
      .get("https://medical-cdt6.onrender.com/api/Course/getAll")
      .then((response) => setCourseData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/* <div className="container"> */}
      <div className="row ">
        <div className="col-lg-6 slider-content ">
          <div className="slider-sec ">
            <h1 className="sub-title">Welcome to Institute of Medical Coding Classes
            </h1>
            <h2 className="main-title">
              Unlock Your Potential in
              <br />
              <span> Medical Coding.</span>
            </h2>

            <p className=" mt-5 p-2" style={{ fontSize: 17 }}>
              At IMC, we are your compass on the path to a successful career in medical coding.
              Our mission is to provide you with the knowledge and skills required to excel in this
              dynamic field of healthcare.
            </p>
            <Link
              className="btn btn-primary btn-hover-dark"
              to="/medical-codding-classes"
            >
              Know More
            </Link>
          </div>
        </div>

        <div className="col-lg-6 ">
          <div className=" slider-course-sec">
            <div className="slider-courses-box d-none d-sm-block">
              {/* <div className="box-content">
                <div className="box-wrapper">
                  <i className="flaticon-open-book"></i>
                  <span className="count">1,235</span>
                  <p>Courses</p>
                </div>
              </div> */}
              {/* <img className="shape-2" src={shape_6} alt="Shape" /> */}
            </div>
            <img
              className="slider_pic_1 d-none d-sm-block img-fluid"
              // src={slider_1}
              src={teacher1}
              alt="Slider"
            />
          </div>

          {/* <div className="slider-rating-box">
            <div className="box-rating d-none d-sm-block">
              <div className="box-wrapper pt-5">
                <span className="count">
                  4.8
                  <img className="star_1" src={star} />
                </span>
                <p>Rating (86K)</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>


      <div className="section">
        <div className="section-padding-02">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-images">
                  <div className="images">
                    {/* <img src={about} alt="About" /> */}
                    <img src={teacher2} alt="" />
                  </div>

                  <div className="about-years">
                    <div className="years-icon">
                      <img src={logoicon} alt="About" />
                    </div>
                    <p>
                      <strong>28+</strong> Years Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home-about">
                  <h5 className="sub-title">Discover Why IMC Is Your Ideal Choice</h5>
                  <ul >
                    <li >
                      <p className="details">
                        <strong> Expert Faculty:</strong> Our instructors are industry experts with years of practical
                        experience. They are committed to not only providing you with knowledge
                        but also mentoring you on your journey to success.
                      </p>
                    </li>
                    <li>
                      <p className="details">
                        <strong> Practical Curriculum:</strong> Our curriculum emphasizes hands-on learning and real world application. We want you to be not just exam-ready but workplace ready
                      </p>
                    </li>
                    <li>
                      <p className="details">
                        <strong> Certification Focus:</strong> Our programs are designed to prepare you for industry recognized certifications like the Certified Professional Coder (CPC) and
                        Certified Coding Specialist (CCS), boosting your career prospects.
                      </p>
                    </li>
                    <li>
                      <p className="details">
                        <strong> Flexible Learning Options:</strong> Whether you prefer in-person classes in our modern
                        facilities or the flexibility of online learning, we offer options tailored to your
                        needs
                      </p>
                    </li>
                    <li>
                      <p className="details"><strong> Career Support:</strong> We're more than just an educational institution; we're your
                        partner in career development. Benefit from job placement assistance, resume
                        building, and interview preparation.
                      </p>
                    </li>
                  </ul>


                  {/* <a href="#" className="btn btn-primary btn-hover-dark">Start A Course</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section ptb50 course-section">
        <div className="container">

          <div className="section-title shape-01 text-center mb-5">
            <h2 className="main-title">
              Explore Our <span>Programs</span>{" "}
            </h2>
          </div>


          <div className="row">
            <div className="col-lg-12">
              <h6 className="texttt">
                Are you looking for a reputable institution to kickstart your
                journey into the world of healthcare? Look no further! The
                Institute of Medical Coding offers exceptional opportunities for
                those interested in a career in the field of medical coding
                classes.
              </h6>
            </div>
          </div>

          {/* <div className="courses-tabs-menu courses-active">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active" data-bs-interval="10000">
                  <ul className="nav nav-justified">
                    <li className="nav-item mx-2">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#tab2"
                      >
                        Online Medical Class
                      </button>
                    </li>
                    <li className="nav-item mx-2">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#tab3"
                      >
                        Medical Codding Class
                      </button>
                    </li>

                  </ul>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <ul className="nav nav-justified">
                    <li className="nav-item mx-2">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                      >
                        Medical Codding Class
                      </button>
                    </li>
                    <li className="nav-item mx-2">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                      >
                        Online Medical Class
                      </button>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev swiper-button-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next swiper-button-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}


          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="">
                <div className="cource-list">
                  <div className="cource-icon-img">
                    <img src={basic_medical_coding} alt="" />
                  </div>
                  <div className="cource-description">
                    <h4 className="ps-1 pe-1"> Basic Medical Coding</h4>
                    <p>Ideal for beginners, covering CPT, ICD-10, and HCPCS
                      Level II coding. Duration: 1.5 month.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="">
                <div className="cource-list">
                  <div className="cource-icon-img">
                    <img src={online_learning} alt="" />
                  </div>
                  <div className="cource-description">
                    <h4>  Online Learning</h4>
                    <p> Self-paced online courses for remote learners. Duration:
                      2 weeks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="">
                <div className="cource-list">
                  <div className="cource-icon-img">
                    <img src={skill} alt="" />
                  </div>
                  <div className="cource-description">
                    <h4>  Skill Refinement</h4>
                    <p> For experienced coders looking to update and enhance
                      their skills. Duration: 2 - 3 weeks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="">
                <div className="cource-list">
                  <div className="cource-icon-img">
                    <img src={specialization} alt="" />
                  </div>
                  <div className="cource-description">
                    <h4>  Specialization Courses</h4>
                    <p> Focus on inpatient, outpatient, or specialty coding.
                      Duration: 2 - 2.5 week each.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="">
                <div className="cource-list">
                  <div className="cource-icon-img">
                    <img src={advanced_coding} alt="" />
                  </div>
                  <div className="cource-description">
                    <h4>  Advanced Medical Coding</h4>
                    <p>For those with prior experience, exploring
                      advanced coding guidelines and software tools. Duration: 3 - 4 weeks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="">
                <div className="cource-list">
                  <div className="cource-icon-img">
                    <img src={Continuous} alt="" />
                  </div>
                  <div className="cource-description">
                    <h4 className="ps-2 pe-2">   Continuous Learning</h4>
                    <p> Stay updated with evolving coding guidelines and
                      trends through our ongoing professional development courses for 1 - 2 weeks</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="">
                <div className="cource-list">
                  <div className="cource-icon-img">
                    <img src={certification} alt="" />
                  </div>
                  <div className="cource-description">
                    <h4> Certification Preparation</h4>
                    <p> Tailored for CPC, CCS, and other certifications,
                      including practice exams. Duration: 3 months.</p>
                  </div>
                </div>
              </div>
            </div>



          </div>


          <div className="tab-content courses-tab-content">
            <div className="tab-pane fade show active" id="tabs1">
              <div className="courses-wrapper">
                {/* <div className="row justify-content-center">
                  {course_data.map((item) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6">
                          <div className="single-courses">
                            <div className="courses-images">
                              <a href="courses-details.html">
                                <img src={medical_02} alt="Courses" />
                              </a>
                            </div>
                            <div className="courses-content">
                              <div className="courses-author">
                                <div className="author">

                                </div>
                                <div className="tag">
                                  <a href="#">Advanced</a>
                                </div>
                              </div>

                              <h4 className="title">
                                <a href="courses-details.html">
                                  {item.course_name}
                                </a>
                              </h4>
                              <div className="courses-meta">
                                <span>
                                  {" "}
                                  <i className="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  <i className="icofont-read-book"></i> 29 Lectures{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div> */}


                {/* <div className="courses-btn text-center">
                  <a href="/courses" className="btn btn-secondary btn-hover-primary">
                    View More
                  </a>
                </div> */}
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="row mt-5">
        <div className="section section-padding download-section">
          <div className="app-shape-1"></div>
          <div className="app-shape-2"></div>
          <div className="app-shape-3"></div>
          <div className="app-shape-4"></div>
          <div className="container">
            <div className="download-app-wrapper mt-n6">
              <div className="section-title section-title-white">
                <h5 className="sub-titlee">Ready to start?</h5>
                <h2 className="main-title pb-5">
                  Your Journey Begins Here
                </h2>
                <p className="text-white journey">Whether you're entering the world of medical coding or advancing your existing
                  skills, Institute of Medical Coding offers a diverse range of programs tailored
                  to your needs. Join us and begin an exciting journey toward a prosperous and
                  fulfilling career in medical coding.</p>
              </div>
              {/* <img
                className="shape-1 animation-right"
                src={shape_14}
                alt="Shape"
              /> */}
              <div className="graduation-cap-img">
                <img src={graduation} className="img-fluid" alt="" />
              </div>
              {/* <div className="download-app-btn">
                <ul className="app-btn ">
                  <li>
                    <a href="">
                      <img src={google_play} alt="Google Play" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={app_store} alt="App Store" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="section section-padding-02 mt-n1 p-5">
        <div className="container">
          <div className="section-title shape-03 text-center">
            <h5 className="sub-title">Student Testimonial</h5>
            <h2 className="main-title">
              Feedback From <span> Student</span>
            </h2>
          </div>

          <div className="testimonial-wrapper testimonial-active ">
            <div className="swiper-container">
              <div className="courses-wrapper">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="single-testimonial">
                      <div className="testimonial-author">
                        <div className="author-thumb">
                          <img className="" src={sundramm} alt="Author" />
                          <i className="icofont-quote-left">
                            <img className="" src={quote}></img>
                          </i>
                        </div>

                        <span className="rating-star">
                          <ul className="rating_stars">
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                          </ul>
                        </span>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          "Grateful for the incredible journey of becoming a
                          medical student, where every challenge is a step
                          closer to making a difference in the world of
                          healthcare.{" "}
                        </p>
                        <h4 className="name">Sundaram Patil</h4>
                        {/* <span className="designation">Product Designer, USA</span> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 ">
                    <div className="single-testimonial mb-4">
                      <div className="testimonial-author">
                        <div className="author-thumb">
                          <img src={author_07} alt="Author" />

                          <i className="icofont-quote-left">
                            <img src={quote}></img>
                          </i>
                        </div>

                        <span className="rating-star">
                          <ul className="rating_stars">
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                          </ul>
                        </span>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          "Exploring the intricacies of the human body, one
                          textbook at a time. 📚🩺 #MedicalStudentLife
                          #OnThePathToHealing"
                        </p>
                        <h4 className="name">Chetana Choudhari</h4>
                        {/* <span className="designation">Product Designer, USA</span> */}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="section section-padding download-section">
          <div className="app-shape-1"></div>
          <div className="app-shape-2"></div>
          <div className="app-shape-3"></div>
          <div className="app-shape-4"></div>
          <div className="container">
            <div className="download-app-wrapper mt-n6">
              <div className="section-title section-title-white">


                <h2 className="main-title pb-5">
                  Get Started Today
                </h2>
                <p className="text-white journey">Ready to embark on this exciting journey? Contact us now to explore our programs,
                  enrollment procedures, and how we can support your aspirations in the realm of
                  medical coding. We're thrilled to be your partner in success.</p>
              </div>
              <img
                className="shape-1 animation-right"
                src={shape_14}
                alt="
                Shape"
              />
              <div className="call-btn">
                <a href="tel:+9168007001">
                  <i className="bi bi-telephone-fill"></i>
                  9168007001</a>
              </div>


              {/* <div className="download-app-btn">
                <ul className="app-btn ">
                  <li>
                    <a href="">
                      <img src={google_play} alt="Google Play" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={app_store} alt="App Store" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>



    </>

  );
};

export default Home;
