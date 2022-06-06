import React, { createRef } from 'react';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

import user from '../../src/assets/user.jpg';

const Review = () => {
  const customSlider = createRef();
  const gotoNext = () => {
    customSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customSlider.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    accessibility: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="sm:w-11/12 w-full mx-auto p-8">
      <h2 className="text-center text-3xl mt-4 mb-4">Client's Review</h2>
      <div className="flex mb-8 justify-center gap-2">
        <div className="w-8 border-4 border-secondary rounded-2xl"></div>
        <div className="w-4 border-4 border-slate-400 rounded-2xl"></div>
        <div className="w-4 border-4 border-slate-400 rounded-2xl"></div>
        <div className="w-4 border-4 border-slate-400 rounded-2xl"></div>
      </div>
      <Slider {...settings} ref={customSlider}>
        {/* 1 */}
        <div className="p-4 bg-white rounded-2xl">
          <div className="flex sm:flex-row flex-col shadow-md justify-between sm:h-60 h-auto p-4 border-2 border-dotted border-primary rounded-2xl">
            <div className="sm:w-2/5 w-full">
              <img className="h-full" src={user} alt="" />
            </div>
            <div className="text-secondary">
              <h2 className="card-title ">Syed Monirul Alam</h2>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="p-4 bg-white rounded-2xl">
          <div className="flex sm:flex-row flex-col shadow-md justify-between sm:h-60 h-auto p-4 border-2 border-dotted border-primary rounded-2xl">
            <div className="sm:w-2/5 w-full">
              <img className="h-full" src={user} alt="" />
            </div>
            <div className="text-secondary">
              <h2 className="card-title ">Syed Monirul Alam</h2>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="p-4 bg-white rounded-2xl">
          <div className="flex sm:flex-row flex-col shadow-md justify-between sm:h-60 h-auto p-4 border-2 border-dotted border-primary rounded-2xl">
            <div className="sm:w-2/5 w-full">
              <img className="h-full" src={user} alt="" />
            </div>
            <div className="text-secondary">
              <h2 className="card-title ">Syed Monirul Alam</h2>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </div>
          </div>
        </div>
      </Slider>

      <div className="text-center my-4">
        <button
          className="text-secondary h-12 w-12 shadow-lg rounded-[50%] text-center bg-white p-2 mr-12"
          onClick={() => gotoPrev()}
        >
          <IoIosArrowBack size={25} className={'ml-[2px]'} />
        </button>
        <button
          className="text-secondary h-12 w-12 shadow-lg rounded-[50%] text-center bg-white p-2"
          onClick={() => gotoNext()}
        >
          <IoIosArrowForward size={25} className={'ml-1'} />
        </button>
      </div>
    </section>
  );
};

export default Review;
