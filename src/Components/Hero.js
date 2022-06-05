import React from 'react';
import hero from '../../src/assets/hero.png';

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-accent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={hero}
            className="sm:w-2/5 w-4/5 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-medium text-secondary">
              We'll help you grow your business.
            </h1>
            <p className="py-6 text-black font-medium">
              We help businesses increase their revenue, brand awareness and
              traffic by implementing highly tailored marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
