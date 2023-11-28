import React from "react";
import "./footer.css";
import shape_21 from "../images/shape_21.png";
import shape_22 from "../images/shape_22.png";
import icons_facebook from "../images/icons_facebook.png";
import icons_twitter from "../images/icons_twitter.png";
import icons_skype from "../images/icons_skype.png";
import icons_instagram from "../images/icons_instagram.png";
import medical_logo from "../images/medical_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <div class="section footer-section">
        <div class="footer-widget-section">
          {/* <img class="shape-1 animation-down" src={shape_21} alt="Shape" /> */}
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 order-md-1 order-lg-1 align-content-center">
                <div className="row justify-content-center">
                  <Link className="footer-logo-link" to="/" onClick={(e) => {
                    scrollToTop();
                  }}><img className="footer-logo " src={medical_logo} alt="Logo" /></Link>
                  <div class="footer-widget">
                    <div class="widget-address">
                      <p className="text-dark pt-3" style={{ marginLeft: "-0.3rem" }}>
                        Our beginner medical coding classes are tailored to those
                        new to the field.
                      </p>
                    </div>

                    {/* <ul class="widget-info">
                    <li>
                      <p>
                        {" "}
                        <i class="flaticon-email"></i>{" "}
                        <a href="mailto:Medicalcoding@gmail.com">
                          Medicalcoding@gmail.com
                        </a>{" "}
                      </p>
                    </li>
                    <li></li>
                  </ul> */}

                    {/* <ul class="widget-social">
                    <li>
                      <a href="#">
                        <img
                          className="widget-icons"
                          src={icons_facebook}
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img className="widget-icons" src={icons_twitter}></img>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img className="widget-icons" src={icons_skype}></img>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="widget-icons"
                          src={icons_instagram}
                        ></img>
                      </a>
                    </li>
                  </ul> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-6 order-md-3 order-lg-2">
                <div class="footer-widget-link">
                  <div class="footer-widget">
                    <h4 class="footer-widget-title text-center">Quick Links</h4>
                    <ul class="widget-link ">
                      {/* <li><a href="#">Creative Writing</a></li> */}
                      {/* <li><a href="#">Film & Video</a></li> */}
                      <div className="row justify-content-center">

                        <li className="text-center">
                          <Link className="text-center"
                            onClick={(e) => {
                              scrollToTop();
                            }} to="/">Home</Link>
                        </li>
                        <li className="text-center">
                          <Link className="" onClick={(e) => {
                            scrollToTop();
                          }} to="/about">About Us</Link>
                        </li>
                        <li className="text-center">
                          <Link className="" onClick={(e) => {
                            scrollToTop();
                          }} to="/faq">FAQ's</Link>
                        </li>
                        <li className="text-center">
                          <a href="/courses"> Courses</a>
                        </li>
                      </div>
                    </ul>
                  </div>

                  <div class="footer-widget">
                    <h4 class="footer-widget-title text-center">Course List</h4>
                    <ul class="widget-link">
                      <li className="text-center">
                        <Link onClick={(e) => {
                          scrollToTop();
                        }} to="/online-medical-codding-classes">
                          Online Medical Coding Classes
                        </Link>
                      </li>
                      <li className="text-center">
                        <Link onClick={(e) => {
                          scrollToTop();
                        }} to="/medical-codding-classes">
                          Medical Coding Classes
                        </Link>
                      </li>
                      <li className="text-center">
                        <Link onClick={(e) => {
                          scrollToTop();
                        }} to="/courses">
                          All Courses
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">
                <div class="footer-widget">
                  <h4 class="footer-widget-title contact-txt ">Contact</h4>
                  <div class="widget-subscribe">
                    <p>
                      {" "}
                      <i class="bi bi-envelope-open-fill mx-2"></i>{" "}
                      <a href="mailto:Medicalcoding@gmail.com">
                        Medicalcoding@gmail.com
                      </a>{" "}
                    </p>

                    <div class="widget-form">
                      {/* <form action="#">
                        <input type="text" placeholder="Email here" />
                        <button class="btn btn-primary btn-hover-dark">
                          Subscribe Now
                        </button>
                      </form> */}
                      <p>
                        {" "}
                        <i class="bi bi-telephone-fill mx-2"></i>{" "}
                        <a href="tel:7722073406">(+91) 7722073406</a>{" "}
                      </p>
                    </div>
                    <ul class="widget-social">
                      <li>
                        <a href="#">
                          <img
                            className="widget-icons"
                            src={icons_facebook}
                          ></img>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="widget-icons"
                            src={icons_twitter}
                          ></img>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img className="widget-icons" src={icons_skype}></img>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="widget-icons"
                            src={icons_instagram}
                          ></img>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <img class="shape-2 animation-left" src={shape_22} alt="Shape" /> */}
        </div>

        <div class="footer-copyright">
          <div class="container">
            <div class="copyright-wrapper ">
              <div class="copyright-link mt-1">
                <a href="#" className="">
                  &copy; 2023 <span> Medical Coding Classes </span>{" "}
                </a>
                {/* <a href="#">Privacy Policy</a>
                <a href="#">Sitemap</a>
                <a href="#">Security</a> */}
              </div>
              <div class="copyright-text mt-1" >
                <p className="" style={{ marginLeft: "0" }}>
                  Designed <i class="icofont-heart-alt"></i> By{" "}
                  <a href="https://bugbattlers.com/" >BugBattlers Technologies Pvt. Ltd.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
