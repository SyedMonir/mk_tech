import React from 'react';
import skim from '../../assets/skim.jpg';
import { RiShareBoxLine } from 'react-icons/ri';

const Skim = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={skim}
            className="sm:w-2/5 w-4/5 rounded-lg shadow-2xl"
            alt="hero"
          />
          <div className="sm:ml-12 ml-0 flex flex-col sm:h-80 h-full justify-between">
            <div>
              <h1 className="text-2xl text-primary font-bold">SKIM</h1>
              <p className="py-6 text-xl">
                SKIM" is a link that a publisher inserts on a specific site
                element, and after clicking on it, an advertisement appears to
                the user. SKIM gives 100% control of your sold traffic amount,
                higher CR to advertisers and CPM rates to publishers.
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

export default Skim;
