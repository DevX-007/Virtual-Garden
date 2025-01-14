import React from 'react';
import Hero from '../components/Home/Hero';
import RecentlyAdded from '../components/Home/RecentlyAdded';

function Home() {
  return (
    <div className='bg-green-100 text-gray-900 px-10 py-8'>
      <Hero />
      <RecentlyAdded />
    </div>
  );
}

export default Home;
