import React from 'react';
import FinalSummery from './FinalSummery';
import Hero from './Hero';
import Review from './Review';
import Summery from './Summery';
import Versatile from './Versatile';

const Home = () => {
  return (
    <section className="bg-accent">
      <Hero />
      <Summery />
      <Versatile />
      <FinalSummery />
      <Review />
    </section>
  );
};

export default Home;
