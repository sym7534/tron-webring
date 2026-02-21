'use client';

import members from '@/data/members.json';
import ShinyText from './ShinyText';

export default function RandomSiteButton() {
  const handleClick = () => {
    const sites = members.sites;
    const random = sites[Math.floor(Math.random() * sites.length)];
    window.open(random.website, '_blank');
  };

  return (
    <button onClick={handleClick} className="mt-2 text-left cursor-pointer">
      <ShinyText
        text="Visit a random website →"
        speed={3}
        delay={1}
        color="#999"
        shineColor="#1A1A1A"
        spread={120}
        className="text-[14px] md:text-[15px] font-medium font-serif italic"
      />
    </button>
  );
}
