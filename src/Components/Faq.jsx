import React, { useEffect, useState } from "react";
import "./faq.css";
import shape_23 from "../images/shape_23.png";
import shape_24 from "../images/shape_24.png";
import reward from "../images/reward.png";
import shape_5 from "../images/shape_5.png";
import shape_6 from "../images/shape_6.png";
import shape_8 from "../images/shape_8.png";
import author_11 from "../images/author_11.jpg";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";
import shape_14 from "../images/shape_14.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Faq = () => {
  const [faq_data, setFaqData] = useState([]);
  console.log(18, faq_data)
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    axios
      .get("https://medical-cdt6.onrender.com/api/FAQ/getAll")
      .then((response) => setFaqData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="">
        <div className="row course-main-page ">
          <div className="col-lg-6 my-course">
            <div class="page-banner-content">
              <ul class="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li class="active" style={{ fontWeight: 600 }}>
                  FAQ
                </li>
              </ul>
              <h2 class="title">
                Frequently <span> Asked Question.</span>
              </h2>
              <img class="shape_23" src={shape_23} alt="Shape" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-4">
                <div class="shape-icon-box">
                  <div class="box-content d-none d-sm-block">
                    <div class="box-wrapper ">
                      <img className="reward-icon" src={reward} />
                    </div>
                    <img
                      class="icon-shape-2 d-none d-sm-block"
                      src={shape_6}
                      alt="Shape"
                    />
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

      <div class="section section-padding">
        <div class="container">
          <div class="courses-top">
            <div class="section-title shape-01">
              <h2 class="main-title">
                Frequently <span>Asked</span> Question
              </h2>
            </div>
          </div>

          <div class="tab-content mt-5 pt-5">
            {faq_data.map((item, i) => {
              return (
                <>
                  <div
                    class="accordion accordion-flush "
                    id={`accordionFlushExample-${i}`}
                  >
                    <div class="accordion-item mb-5">
                      <h2 class="accordion-header">
                        <button
                          className={`accordion-button ${activeIndex === i ? '' : 'collapsed'}`}
                          style={{ backgroundColor: '#e7f8ee' }}
                          type="button"
                          onClick={() => handleAccordionClick(i)}
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse-${i}`}
                          aria-expanded={activeIndex === i ? 'true' : 'false'}
                          aria-controls={`flush-collapse-${i}`}
                        >
                          <h6 className="fw-bold">Question :</h6>
                          <h6 className="mx-2">{item.que}</h6>
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse-${i}`}
                        className={`accordion-collapse collapse ${activeIndex === i ? 'show' : ''}`}
                        data-bs-parent={`#accordionFlushExample-${i}`}
                      >
                        <div className="accordion-body">
                          <h6 className="fw-bold">Answer :</h6>
                          {item.ans}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div class="accordion-item mb-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    style={{ backgroundColor: "#e7f8ee" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Question #1:
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse "
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <h6 className="fw-bold">Answer :</h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, ratione! Eveniet eaque aperiam, error libero
                    sapiente numquam aspernatur, sed maiores aut, porro culpa
                    atque recusandae ea quis ratione! Ullam, perferendis? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum culpa deserunt necessitatibus vero, quasi
                    molestias sed enim repudiandae saepe officia laborum veniam
                    et assumenda adipisci vel distinctio?
                  </div>
                </div>
              </div> */}
            {/* <div class="accordion-item mb-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    style={{ backgroundColor: "#e7f8ee" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Question #2:
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse "
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <h6 className="fw-bold">Answer :</h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, ratione! Eveniet eaque aperiam, error libero
                    sapiente numquam aspernatur, sed maiores aut, porro culpa
                    atque recusandae ea quis ratione! Ullam, perferendis? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum culpa deserunt necessitatibus vero, quasi
                    molestias sed enim repudiandae saepe officia laborum veniam
                    et assumenda adipisci vel distinctio?
                  </div>
                </div>
              </div> */}
            {/* <div class="accordion-item mb-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    style={{ backgroundColor: "#e7f8ee" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Question #3:
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse "
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <h6 className="fw-bold">Answer :</h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, ratione! Eveniet eaque aperiam, error libero
                    sapiente numquam aspernatur, sed maiores aut, porro culpa
                    atque recusandae ea quis ratione! Ullam, perferendis? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum culpa deserunt necessitatibus vero, quasi
                    molestias sed enim repudiandae saepe officia laborum veniam
                    et assumenda adipisci vel distinctio?{" "}
                  </div>
                </div>
              </div> */}

            {/* <div class="accordion-item mb-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    style={{ backgroundColor: "#e7f8ee" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Question #4:
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <h6 className="fw-bold">Answer :</h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, ratione! Eveniet eaque aperiam, error libero
                    sapiente numquam aspernatur, sed maiores aut, porro culpa
                    atque recusandae ea quis ratione! Ullam, perferendis? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum culpa deserunt necessitatibus vero, quasi
                    molestias sed enim repudiandae saepe officia laborum veniam
                    et assumenda adipisci vel distinctio?
                  </div>
                </div>
              </div> */}

            {/* <div class="accordion-item mb-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    style={{ backgroundColor: "#e7f8ee" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Question #5:
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <h6 className="fw-bold">Answer :</h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, ratione! Eveniet eaque aperiam, error libero
                    sapiente numquam aspernatur, sed maiores aut, porro culpa
                    atque recusandae ea quis ratione! Ullam, perferendis? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum culpa deserunt necessitatibus vero, quasi
                    molestias sed enim repudiandae saepe officia laborum veniam
                    et assumenda adipisci vel distinctio?
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
            </div> */}

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

export default Faq;
