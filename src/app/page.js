import BestProducts from '@/Components/BestProducts';
import Hero from '@/Components/Hero';
import MarqueeSection from '@/Components/Marquee';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Hero/>
      <MarqueeSection/>
      <BestProducts/>
    </div>
  );
}

export default Page;
