 import React from 'react';
import Slider from 'react-slick';
import "./DepartmentCarousel.css"

export default function DepartmentCarousel({ data }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'cs_slider_prev cs_center' +
        (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <img src="images/icons/left_arrow_blue.svg" alt="Prev" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'cs_slider_next cs_center' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <img src="images/icons/right_arrow_blue.svg" alt="Next" />
    </div>
  );

  const settings = {
    dots: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings} className="cs_gap_20 cs_cs_slider_navigation_1 cs_department_carousel">
      {data?.map((item, index) => (
        <div key={index}>
          <div className="cs_department_card">
            <img src={item.iconUrl} alt={item.title} className="cs_department_image" />
            <p className="cs_department_title">{item.title}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
