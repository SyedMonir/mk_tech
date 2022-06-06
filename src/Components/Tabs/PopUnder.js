import React from 'react';
import popUnder from '../../assets/popunder.png';
import { RiShareBoxLine } from 'react-icons/ri';

const PopUnder = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={popUnder}
            className="sm:w-2/5 w-4/5 rounded-lg shadow-2xl"
            alt="hero"
          />
          <div className="sm:ml-12 ml-0 flex flex-col sm:h-80 h-full justify-between">
            <div>
              <h1 className="text-2xl text-primary font-bold">POP-UNDER</h1>
              <p className="py-6 text-xl">
                This is one of the most popular ads. After user's click, this ad
                opens landing page in behind. So, the user experience is not
                hampered much
              </p>
            </div>
            <div>
              <a
                href="https://github.com/SyedMonir"
                target="popunder"
                className=" text-secondary text-xl flex items-center"
                onClick={() => {
                  window.open(
                    'https://github.com/SyedMonir',
                    'popunder',
                    'width=600,height=800'
                  );
                  return false;
                }}
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

export default PopUnder;
