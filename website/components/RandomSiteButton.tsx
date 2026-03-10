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
    <button
      onClick={handleClick}
      className="group mt-4 flex items-center gap-3 border border-brass/40 px-6 py-3 cursor-pointer hover:border-brass hover:bg-brass/10 transition-all duration-300 w-fit"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-brass shrink-0 transition-transform duration-500 group-hover:rotate-90"
      >
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      <ShinyText
        text="Visit a random website"
        speed={3}
        delay={1}
        color="#888"
        shineColor="#C4A882"
        spread={120}
        className="text-[14px] md:text-[15px] font-medium font-mono"
      />
    </button>
  );
}
