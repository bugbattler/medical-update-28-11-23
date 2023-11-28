import React from 'react'
import './services.css'
import services_page_bannerr from '../images/services_page_bannerr.jpg'
import Medical_Science_Courses from '../images/Medical_Science_Courses.jpg'
import shape_23 from '../images/shape_23.png'
import reward from '../images/reward.png'
import shape_6 from '../images/shape_6.png'
import shape_24 from '../images/shape_24.png'
import author_11 from '../images/author_11.jpg'
import right from '../images/right.png'
import timer from '../images/timer.png'
import quick from '../images/quick.png';
import full from '../images/full.png';
import checked from '../images/checked.png';
const Services = () => {
    return (
        <>
            <div className=''>
                <div className="row services-page">
                    <div className="col-lg-6 my-course">
                        <div class="page-banner-content">
                            <ul class="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li class="active" style={{ fontWeight: 600 }}> Medical Coding Classes</li>
                            </ul>
                            <h2 class="title"> Medical Coding <span> Classes</span></h2>
                            <img class="shape_23" src={shape_23} alt="Shape" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4">
                                <div class="shape-icon-box">
                                    <div class="box-content d-none d-sm-block">
                                        <div class="box-wrapper">
                                            <img className='reward-icon' src={reward} />
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

                <div className='services-content '>
                    <div className="row container pt-5">
                        <h2 class=" pb-5 mt-5">Welcome to the Institute of <span className='title-1'>Medical Coding Classes</span></h2>

                        <h3 className='fw-bolder pb-2'>Our Medical Coding Classes</h3>


                        <ol>
                            <li className='text-one'>Beginner Medical Coding Classes: Our beginner medical coding classes are
                                tailored to those new to the field. They provide a solid foundation to start
                                your journey into the world of medical coding classes.</li><br></br>

                            <li className='text-one'>Advanced Medical Coding Classes: If you already have some experience, our
                                advanced medical coding classes will help you take your skills to the next
                                level.</li><br></br>

                            <li className='text-one'>Certification Programs: Our certification programs are designed to help you
                                stand out in the competitive job market in the realm of medical coding
                                classes.</li>
                            <br></br>
                        </ol>

                        <div className="col-lg-6">
                            <img className='medical-img-2 mt-4' src={Medical_Science_Courses} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h6 className='texttt'>Your Gateway to a Promising Career in Medical Coding Classes</h6>
                            <br></br>
                            {/* <h6>We are one of the leading and reliable REGULATORY SERVICE PROVIDER of INDIA offering services to you.</h6>
                            <br></br> */}
                            <h6 className='texttt'>Are you looking for a reputable institution to kickstart your journey into the world of
                                healthcare? Look no further! The Institute of Medical Coding offers exceptional
                                opportunities for those interested in a career in the field of medical coding classes.</h6>
                        </div>
                    </div>


                    <div className="row container">
                        <h6 className='text mt-4'>Why Choose Medical Coding Classes with IMC?</h6>
                    </div>

                    <div className="row container">
                        <h6 className='text-two-2'>Medical coding are the backbone of the healthcare industry. Our institution
                            specializes in offering top-tier medical coding AND OUR MEDICAL CODING
                            CLASSES that provide a fundamental understanding of this crucial profession. By
                            translating complex medical records into standardized codes, you'll ensure accuracy
                            in billing, efficient administrative processes, and contribute to valuable data for
                            medical research.</h6>
                    </div>
                    <br></br>

                    <div className="row container">
                        <h6 className='text p-4 '>What Sets Us Apart in the World of Medical Coding Classes?</h6>
                    </div>

                    <div className="row container">

                        <h6 className='text-two-3 '> 1. Expert Instructors: At the Institute of Medical Coding, our expert instructors are
                            well-versed in the latest coding systems and industry best practices, and they are
                            dedicated to providing you with the best education in medical coding classes.</h6>

                    </div>

                    <div className="row container">
                        <h6 className='text-two-3'>2. Comprehensive Curriculum: Our institution offers a comprehensive curriculum
                            covering ICD-10, CPT coding, compliance, and more in our medical coding classes.
                            We provide all the necessary tools for your success in your journey of medical
                            coding classes.</h6>
                    </div>

                    <div className="row container">
                        <h6 className='text-two-3'>3. Job Opportunities: With the healthcare industry continually growing, there's a
                            constant demand for skilled medical coders who have completed reputable medical
                            coding classes. Our medical coding classes prepare you to enter this high-demand
                            job market.</h6>
                    </div>

                    <div className="row container">
                        <h6 className='text-two-3'>4. Online Medical Coding Classes: We understand the importance of flexibility.
                            That's why we offer online medical coding classes, allowing you to study at your
                            own pace and convenience. It's the modern way to access our medical coding
                            classes.</h6>
                    </div>

                    <div className="row container">


                        <h6 className='text-two-3'>5. Supportive Community: Join a community of like-minded individuals who are
                            passionate about medical coding in our medical coding classes. Share knowledge
                            and experiences to enhance your learning experience.</h6>

                    </div>


                </div>

                <div className="row  all-services-card">
                    <div className="all-content mt-4 row container">
                        <h2 className=' mb-3 px-5'>Professional Standards</h2>

                        <div className="col-lg-3">
                            <div class="card-standerd mb-2">
                                <div class="card-body icon">
                                    <img className='' src={checked} alt="" /> </div>
                                <h5 class="card-title">Quality Assurance</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="card-standerd mb-2">
                                <div class="card-body icon">
                                    <img className='' src={timer} alt="" /></div>
                                <h5 class="card-title">Timely Delivery</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="card-standerd mb-2">
                                <div class="card-body icon">
                                    <img className='' src={quick} alt="" /></div>
                                <h5 class="card-title">Reliable Services</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="card-standerd mb-2">
                                <div class="card-body icon">
                                    <img className='' src={timer} alt="" /></div>
                                <h5 class="card-title">Quick TAT</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Services

