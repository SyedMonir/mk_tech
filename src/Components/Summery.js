import React from 'react';
import { AiFillNotification } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';
import { BiUserVoice } from 'react-icons/bi';

const Summery = () => {
  return (
    <section className="bg-[#644f9c17]">
      <div className="relative">
        <h2 className="py-8  text-secondary uppercase text-center font-medium  text-3xl">
          Available for everyone
        </h2>
        <div className="flex justify-between">
          <div className="border-t z-[1] border-secondary absolute top-[40%] border-dashed h-5 sm:w-1/3 w-[10%]"></div>
          <div className="border-t z-[1] border-secondary absolute right-0 top-[40%] border-dashed h-5 sm:w-1/3 w-[10%]"></div>
        </div>
        <h5 className="text-center text-xl">
          We're a digital marketing agency
        </h5>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* 1 */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className=" sm:text-2xl text-xl font-medium bg-white rounded-[50%] w-40 h-40 mb-3 mx-auto flex items-center">
                  <AiFillNotification
                    className="mx-auto text-blue-600"
                    size={75}
                  />
                </div>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                </p>
                <button className="bg-secondary text-white px-16 py-2 rounded-2xl">
                  Check
                </button>
              </div>
            </div>
            {/* 2 */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className=" sm:text-2xl text-xl font-medium bg-white rounded-[50%] w-40 h-40 mb-3 mx-auto flex items-center">
                  <FaPaperPlane className="mx-auto text-blue-600" size={75} />
                </div>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                </p>
                <button className="bg-secondary text-white px-16 py-2 rounded-2xl">
                  Check
                </button>
              </div>
            </div>
            {/* 3 */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className=" sm:text-2xl text-xl font-medium bg-white rounded-[50%] w-40 h-40 mb-3 mx-auto flex items-center">
                  <BiUserVoice className="mx-auto text-blue-600" size={75} />
                </div>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                </p>
                <button className="bg-secondary text-white px-16 py-2 rounded-2xl">
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Summery;
