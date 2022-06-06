import React from 'react';
import Tabs from './Tabs/Tabs';

const Versatile = () => {
  return (
    <section>
      <div className="relative">
        <h2 className="py-8  text-secondary uppercase text-center font-medium  text-3xl">
          VERSATILE AD FORMATS
        </h2>
        <div className="flex justify-between">
          <div className="border-t z-[1] border-secondary absolute top-[50%] border-dashed h-5 sm:w-1/3 w-[10%]"></div>
          <div className="border-t z-[1] border-secondary absolute right-0 top-[50%] border-dashed h-5 sm:w-1/3 w-[10%]"></div>
        </div>
      </div>
      {/* Tabs */}
      <Tabs />
    </section>
  );
};

export default Versatile;
