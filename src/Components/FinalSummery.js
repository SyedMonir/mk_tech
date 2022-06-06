import React from 'react';

const FinalSummery = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-secondary">
        <div className="container px-5 py-12 mx-auto">
          <h2 className="text-center text-3xl text-white">Business Summery</h2>
          <div className="flex flex-wrap -m-4">
            {/* 1 */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className=" sm:text-2xl text-xl font-medium text-white rounded-[50%] w-72 h-72 mb-3 mx-auto flex items-center justify-center flex-col border-dashed border-2">
                  <h2 className="text-5xl mb-4">1 BN+</h2>
                  <p>Daily Impressions</p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className=" sm:text-2xl text-xl font-medium bg-white text-secondary rounded-[50%] w-72 h-72 mb-3 mx-auto flex items-center justify-center flex-col ">
                  <h2 className="text-5xl mb-4">$500K+</h2>
                  <p>Paid</p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className=" sm:text-2xl text-xl font-medium bg-primary text-white rounded-[50%] w-72 h-72 mb-3 mx-auto flex items-center justify-center flex-col ">
                  <h2 className="text-5xl mb-4">8k+</h2>
                  <p>Global Publishers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalSummery;
