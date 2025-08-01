 import React from "react";
import Slider from "react-slick";
import "./DoctorSlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Images
import Dr_mahesh from './Doctor_image/Dr_mahesh_goad.webp';
import Dr_kulbhushan from './Doctor_image/Dr. icon.webp';
import Dr_shubham from './Doctor_image/Dr_shubham_satsangi.webp';
import Dr_kp_singh from './Doctor_image/Dr. icon.webp';
import Dr_shreya from './Doctor_image/Dr_shreya_agrawal.webp';
import Dr_ashwin from './Doctor_image/Dr_ashwin_aouchat.webp';
import Dr_akash from './Doctor_image/Dr. icon.webp';
import Dr_sachin from './Doctor_image/Dr. icon.webp';
import Dr_vikash from './Doctor_image/Dr. icon.webp';
import Dr_hemant from './Doctor_image/Dr. icon.webp';
import Dr_avinash from './Doctor_image/Dr. icon.webp';

// Doctor data
const doctors = [
  {
    name: "Dr. Mahesh Gaud",
    degree: "MBBS, MD",
    department: "दमा | हृदय | मधुमेह | थायराइड",
    timing: "10 AM – 12 PM (Daily)",
    image: Dr_mahesh,
  },
  {
    name: "Dr. Kulbhushan Kanase",
    degree: "MBBS, MD",
    department: "दमा | हृदय | मधुमेह | थायराइड",
    timing: "10 AM – 12 PM (Daily)",
    image: Dr_kulbhushan,
  },
  {
    name: "Dr. Shubham Satsangi",
    degree: "MBBS, MD",
    department: "दमा | हृदय | मधुमेह | थायराइड",
    timing: "4 PM – 6 PM (Daily)",
    image: Dr_shubham,
  },
  {
    name: "Dr. K.P. Singh",
    degree: "MBBS, DLO",
    department: "नाक, कान, गला रोग विशेषज्ञ",
    timing: "10 AM – 12 PM (Daily)",
    image: Dr_kp_singh,
  },
  {
    name: "Dr. Shreya Agrawal",
    degree: "MBBS, DGO",
    department: "महिला एवं प्रसूति रोग विशेषज्ञ",
    timing: "10 AM – 12 PM (Daily)",
    image: Dr_shreya,
  },
  {
    name: "Dr. Ashwin Aouchat",
    degree: "MBBS, MS",
    department: "पेट रोग विशेषज्ञ",
    timing: "10 AM – 12 PM (Mon & Wed)",
    image: Dr_ashwin,
  },
  {
    name: "Dr. Akash Dev Naneriya",
    degree: "MBBS, D Ortho",
    department: "हड्डी एवं जोड़ रोग विशेषज्ञ",
    timing: "2 PM – 4 PM (Mon & Wed)",
    image: Dr_akash,
  },
  {
    name: "Dr. Sachin Garg",
    degree: "MBBS, MD",
    department: "नवजात शिशु एवं बाल रोग विशेषज्ञ",
    timing: "2 PM – 4 PM (Daily)",
    image: Dr_sachin,
  },
  {
    name: "Dr. Vikash Porwal",
    degree: "MBBS, MD",
    department: "नवजात शिशु एवं बाल रोग विशेषज्ञ",
    timing: "2 PM – 4 PM (Daily)",
    image: Dr_vikash,
  },
  {
    name: "Dr. Hemant Kansal",
    degree: "MBBS, MS",
    department: "महिला एवं प्रसूति रोग विशेषज्ञ (On Call)",
    timing: "On Call",
    image: Dr_hemant,
  },
  {
    name: "Dr. Avinash Patwari",
    degree: "MBBS, MS",
    department: "महिला एवं प्रसूति रोग विशेषज्ञ (On Call)",
    timing: "On Call",
    image: Dr_avinash,
  }
];

// Arrows
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

// Component
const DoctorSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
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
            <p className="doctor-timing">{doctor.timing}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DoctorSlider;
