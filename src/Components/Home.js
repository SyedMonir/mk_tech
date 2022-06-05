import React from 'react';
import Hero from './Hero';
import Summery from './Summery';
import Versatile from './Versatile';

const Home = () => {
  return (
    <section className="bg-accent">
      <Hero />
      <Summery />
      <Versatile />
    </section>
  );
};

export default Home;
