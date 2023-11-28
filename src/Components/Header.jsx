import React, { useEffect, useState } from "react";
import "./header.css";
import facebooks from "../images/facebooks.png";
import twitter from "../images/twitter.png";
import skype from "../images/skype.png";
import instagram from "../images/instagram.png";
import medical_logo from "../images/medical_logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
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
        console.log("ok");
        if (data.fname !== "" && data.email !== "" && data.phone !== "") {
            axios
                .post("https://medical-cdt6.onrender.com/api/Contact/create", data)
                .then((response) => {
                    alert("Form Submitted");
                    setshowModal(false);
                    localStorage.setItem('Contact', JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.error("", error);
                    alert("An error occurred while submitting the form");
                });
                
            } else {
                alert("Please fill in all fields before submitting the form.");
            }
        };
        // setshowModal(true);
        // const cont = response.data;

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const closeCollapse = () => {
        setIsCollapsed(true);
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const Validation = (values) => {
        const errors = {};
        const regex =
            "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$";
        if (!values.fname) {
            errors.fname = "Name field is required ";
            setErrors(true);
        } else if (!formValue.fname.replace == "") {
            errors.fname = " Name field is required";
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
        } else if (!values.phoneNo == "") {
            errors.name = "Empty field are not allowed";
        }

        return errors;
    };

    const triggerModalButton = () => {
        const button = document.querySelector(".btn-primary");
        if (button) {
            // console.log("ok");
            button.click(); // Simulate a click event on the button
        }
    };
    useEffect(() => {
        // Delay the button click by 6 seconds (6000 milliseconds)
        const delay = 6000;
        let timeoutId = ""
        const storedUser = JSON.parse(localStorage.getItem('Contact'));
        // console.log(94, storedUser);
        if (!storedUser) {

            timeoutId = setTimeout(triggerModalButton, delay);
        } else {
            console.log("Achived")
        }

        return () => {
            // Clear the timeout if the component unmounts before the timeout is reached
            clearTimeout(timeoutId);
        };
    }, []);
    return (
        <>
            {/* {showModal && (
                <>
                    <div className="popup " id="myModal" role="dialog">
                        <div className="">
                            <div className="modal-dialog modal-dialog-centered" id="myModel">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="container-fluid px-4">
                                            <div className="formlayout">
                                                <div className="form-heading">
                                                    <label
                                                        className="form-control form-control-lg text-center"
                                                        style={{ fontSize: 25 }}
                                                    >
                                                        Register
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modal-body ">
                                        <form action="" className="form-container">
                                            <div className="">
                                                <label>
                                                    <b>
                                                        Full name<span className="text-danger">*</span>
                                                    </b>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Full name"
                                                    name="name"
                                                    onChange={(e) => {
                                                        setData({ ...data, fname: e.target.value });

                                                    }}
                                                />

                                                {errors.fname && data.fname.length <= 0 ? (
                                                    <p
                                                        className="text-danger"
                                                        style={{ fontSize: "14px" }}
                                                    >
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
                                                    <p
                                                        className="text-danger"
                                                        style={{ fontSize: "14px" }}
                                                    >
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
                                                    <p
                                                        className="text-danger"
                                                        style={{ fontSize: "14px" }}
                                                    >
                                                        {errors.phone}
                                                    </p>
                                                ) : (
                                                    ""
                                                )}
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn Loginbtn"
                                                onClick={(e) => { handleEnquiryForm(e); }}
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )} */}
            {/* <!-- Button trigger modal --> */}

            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            ></button>

            {/* <!-- Modal --> */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Register
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form action="" className="form-container">
                                <div className="">
                                    <label>
                                        <b>
                                            Full name<span className="text-danger" >*</span>
                                        </b>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        name="fname"
                                        required
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
                                        required
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
                                        required
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
                                    className="btn Loginbtn"
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

            <div className="header-top d-none d-lg-block headdderr" style={{marginTop:"-25px"}}>
                <div className="container">
                    <div className="header-top-wrapper">
                        {/* <div className="header-top-left">
                            <p>All course 28% off for <a href="#">Liberian people’s.</a></p>
                        </div> */}

                        <div className="header-top-medal">
                            <div className="top-info">
                                <p>
                                    <i className="bi bi-telephone-fill"></i>{" "}
                                    <a href="tel:9168007001">Contact - (+91) 9168007001</a>
                                </p>
                                <p>
                                    <i className="bi bi-envelope-open-fill"></i>{" "}
                                    <a href="mailto:Medicalcoding@gmail.com">
                                        Email Id - Medicalcoding@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="header-top-right">
                            <ul className="social">
                                <li>
                                    <a href="#">
                                        <img className="icons" src={facebooks} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img className="icons" src={twitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img className="icons" src={skype} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img className="icons" src={instagram} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid nav-nav">
                    <img className='logo m-0' src={medical_logo} alt="Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link pe-auto" to="/" style={{ cursor: "pointer" }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courses" style={{ cursor: "pointer" }}>All Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/faq" style={{ cursor: "pointer" }}>Faq</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/about' style={{ cursor: "pointer" }}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/contact' style={{ cursor: "pointer" }}>Contact</Link>
                            </li>

                            <li className="nav-item">
                                <li className="nav-item dropdown service-text">
                                    <a className="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: 700 }}>
                                        Services
                                    </a>
                                    <ul className="dropdown-menu sub-menu">
                                        <li><Link to="/medical-codding-classes">Medical Coding Classes</Link></li>
                                        <li><Link to="/online-medical-codding-classes">Online Medical Classes</Link></li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid nav-nav">
                    <Link to="/">
                        <img className="logo m-0" src={medical_logo} alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav all-links ms-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link pe-auto"
                                    to="/"
                                    style={{ cursor: "pointer", color: "#343a40" }}
                                    // aria-expanded="true"
                                    // aria-label="Toggle navigation"
                                    // data-bs-toggle="collapse"
                                    // data-bs-target="#navbarSupportedContent"

                                    area-expanded={!isCollapsed}
                                    // onClick={scrollToTop}
                                    onClick={(e) => {
                                        toggleCollapse(e);
                                        scrollToTop();
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link "
                                    to="/about"
                                    style={{ cursor: "pointer", color: "#343a40" }}
                                    // aria-expanded="true"
                                    // aria-label="Toggle navigation"
                                    // data-bs-toggle="collapse"
                                    // data-bs-target="#navbarSupportedContent"
                                    onClick={(e) => {
                                        toggleCollapse(e);
                                        scrollToTop();
                                    }}
                                    area-expanded={!isCollapsed}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link "
                                    to="/faq"
                                    style={{ cursor: "pointer", color: "#343a40" }}
                                    // aria-expanded="true"
                                    // aria-label="Toggle navigation"
                                    // data-bs-toggle="collapse"
                                    // data-bs-target="#navbarSupportedContent"
                                    onClick={(e) => {
                                        toggleCollapse(e);
                                        scrollToTop();
                                    }}
                                    area-expanded={!isCollapsed}
                                >
                                    FAQ's
                                </Link>
                            </li>

                            <li className="service-text dropdown ">
                                <a
                                    className=""
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ fontSize: 19, color: "#343a40" }}
                                >
                                    Courses
                                </a>
                                <ul className="dropdown-menu sub-menu">
                                    <li>
                                        <Link
                                            to="/medical-codding-classes"
                                            // data-bs-target="#navbarSupportedContent"
                                            // aria-expanded="true"
                                            // aria-label="Toggle navigation"
                                            // data-bs-toggle="collapse"
                                            onClick={(e) => {
                                                toggleCollapse(e);
                                                scrollToTop();
                                            }}
                                            area-expanded={!isCollapsed}
                                        >
                                            Medical Coding Classes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/online-medical-codding-classes"
                                            // data-bs-target="#navbarSupportedContent"
                                            // aria-expanded="true"
                                            // aria-label="Toggle navigation"
                                            // data-bs-toggle="collapse"
                                            onClick={(e) => {
                                                toggleCollapse(e);
                                                scrollToTop();
                                            }}
                                            area-expanded={!isCollapsed}
                                        >
                                            Online Medical Classes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/courses"
                                            // data-bs-target="#navbarSupportedContent"
                                            // aria-expanded="true"
                                            // aria-label="Toggle navigation"
                                            // data-bs-toggle="collapse"
                                            onClick={(e) => {
                                                toggleCollapse(e);
                                                scrollToTop();
                                            }}
                                            area-expanded={!isCollapsed}
                                        >
                                            All Courses
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link "
                                    to="/contact"
                                    style={{ cursor: "pointer", color: "#343a40" }}
                                    // data-bs-target="#navbarSupportedContent"
                                    // aria-expanded="true"
                                    // aria-label="Toggle navigation"
                                    // data-bs-toggle="collapse"
                                    onClick={(e) => {
                                        toggleCollapse(e);
                                        scrollToTop();
                                    }}
                                    area-expanded={!isCollapsed}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
