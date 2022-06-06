import React from 'react';
import hero from '../../assets/hero.png';
import { RiShareBoxLine } from 'react-icons/ri';

const BannerAd = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={hero}
            className="sm:w-2/5 w-4/5 rounded-lg shadow-2xl"
            alt="hero"
          />
          <div className="sm:ml-12 ml-0 flex flex-col sm:h-80 h-full justify-between">
            <div>
              <h1 className="text-2xl text-primary font-bold">BANNER AD</h1>
              <p className="py-6 text-xl">
                Choose between the available banner formats. Highly effective ad
                for visibility
              </p>
            </div>
            <div className="">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-secondary text-xl flex items-center"
              >
                Learn more <RiShareBoxLine className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAd;
