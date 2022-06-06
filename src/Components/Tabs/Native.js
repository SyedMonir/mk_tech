import React from 'react';
import nativeAdvertising from '../../assets/nativeAdvertising.jpg';
import { RiShareBoxLine } from 'react-icons/ri';

const Native = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={nativeAdvertising}
            className="sm:w-2/5 w-4/5 rounded-lg shadow-2xl"
            alt="hero"
          />
          <div className="sm:ml-12 ml-0 flex flex-col sm:h-80 h-full justify-between">
            <div>
              <h1 className="text-2xl text-primary font-bold">NATIVE</h1>
              <p className="py-6 text-xl">
                Ad format with the image and the title, that perfectly fits into
                the content of the site. Native ads are placed in the most
                visible areas of the page and, thus, this format shows good
                results and the level of interaction
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

export default Native;
