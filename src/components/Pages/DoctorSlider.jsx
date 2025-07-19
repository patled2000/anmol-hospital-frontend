 import React from "react";
import Slider from "react-slick";
import "./DoctorSlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Images
import dr_ashwin_aouchat from './Doctor_image/Dr ashwin aouchat.png';
import Dr_mahesh_goad from './Doctor_image/Dr mahesh goad.png';
import Dr_shreya_agrawal from './Doctor_image/Dr shreya agrawal.png';
import Dr_shubham_satsangi from './Doctor_image/Dr shubham.satsangi.png';

// Doctor data
const doctors = [
  {
    name: "Dr. Ashwin Aouchat",
    degree: "MBBS, MS (Trauma)",
    department: "General Surgery",
    image: dr_ashwin_aouchat,
  },
  {
    name: "Dr. Mahesh Gaud",
    degree: "MBBS, MD (Cardiology)",
    department: "Medical Management",
    image: Dr_mahesh_goad,
  },
  {
    name: "Dr. Shreya Agrawal",
    degree: "MBBS, DGO (Obstetrics)",
    department: "Gynaecology",
    image: Dr_shreya_agrawal,
  },
  {
    name: "Dr. Shubham Satsangi",
    degree: "MBBS, DCH (Cardiology)",
    department: "Medical Management",
    image: Dr_shubham_satsangi,
  }
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

// Main Component
const DoctorSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
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
      <h2 className="slider-title expert-title">Meet Our Expert Doctors</h2>
      <p className="doctor-intro">
        At Anmol Hospital, our team of highly skilled and compassionate doctors brings 
        years of experience across multiple specialties. From critical care to routine 
        checkups, they are committed to delivering patient-first, ethical, and quality 
        healthcare every day.
      </p>

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
