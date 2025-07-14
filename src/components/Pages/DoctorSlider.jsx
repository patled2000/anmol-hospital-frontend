 import React from "react";
import Slider from "react-slick";
import "./DoctorSlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. A. K. Sharma",
    degree: "MBBS, MD (Cardiology)",
    department: "Cardiology",
    image: "/images/doctors/doc1.jpg",
  },
  {
    name: "Dr. Neha Gupta",
    degree: "MBBS, MS (Gynecology)",
    department: "Gynecology",
    image: "/images/doctors/doc2.jpg",
  },
  {
    name: "Dr. Ravi Verma",
    degree: "MBBS, MS (Orthopedics)",
    department: "Orthopedics",
    image: "/images/doctors/doc3.jpg",
  },
  {
    name: "Dr. Priya Singh",
    degree: "MBBS, DCH (Pediatrics)",
    department: "Pediatrics",
    image: "/images/doctors/doc4.jpg",
  },
];

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const DoctorSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="doctor-slider-container">
      <h2 className="slider-title">Meet Our Expert Doctors</h2>
      <Slider {...settings}>
        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <div className="doctor-img-wrapper">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            </div>
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-degree">{doctor.degree}</p>
            <p className="doctor-department">{doctor.department}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DoctorSlider;
