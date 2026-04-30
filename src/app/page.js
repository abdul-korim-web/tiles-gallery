import BestProducts from '@/Components/BestProducts';
import Hero from '@/Components/Hero';
import MarqueeSection from '@/Components/Marquee';
import React from 'react';
export const metadata = {
  title: ' TilesHub',
  description: 'This is a TilesHub Home page',
}

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
