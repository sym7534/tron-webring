'use client';

import { motion } from 'motion/react';
import members from "@/data/members.json";
import RandomSiteButton from "@/components/RandomSiteButton";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Home() {
  return (
    <div className="min-h-screen grid-overlay flex flex-col">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md flex items-center justify-between px-6 md:px-20 py-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-4">
          <img src="/logowhitetransp.png" alt="Tron" className="h-8" />
          <span className="text-[11px] tracking-[3px] uppercase text-light/70 font-mono">
            Tron Ring
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sym7534/tron-webring"
            className="border border-brass text-brass text-[11px] tracking-[2px] uppercase px-5 py-2 font-mono hover:bg-brass hover:text-dark transition-all duration-300"
          >
            Join
          </a>
          <a
            href="https://github.com/sym7534/tron-webring/tree/main/public"
            className="border border-white/[0.08] text-light/60 text-[11px] tracking-[2px] uppercase px-5 py-2 font-mono hover:border-white/20 hover:text-light/70 transition-all duration-300"
          >
            Assets
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-8 md:gap-16 px-6 md:px-20 py-12 md:py-20 overflow-hidden">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-brass text-[11px] tracking-[4px] uppercase font-mono"
          >
            Est. 2025 &middot; UWaterloo
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-serif italic text-[42px] md:text-[80px] leading-[1.0] tracking-[-1px] md:tracking-[-2px] text-light"
          >
            The Mechatronics{"\n"}Engineering Webring
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-light/60 text-[14px] leading-[1.7] max-w-[440px] font-mono"
          >
            A curated directory of personal websites by University of Waterloo
            Mechatronics Engineering graduates and students. Tron on top.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <RandomSiteButton />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="hidden md:flex items-start justify-center pt-8"
        >
          <img
            src="/faviconhq.png"
            alt=""
            className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] object-contain rotate-[15deg] star-glow animate-glow-pulse"
          />
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <div className="mx-6 md:mx-20 border-t border-white/[0.08]">
        <div className="py-4 flex items-center gap-2 text-[12px] text-light/50 font-mono tracking-[1px] uppercase">
          {Array.from(new Set(members.sites.map((s) => s.class))).map((cls, i) => (
            <span key={cls}>
              {i > 0 && <span> &amp; </span>}
              <span className="text-brass">{cls}</span>
            </span>
          ))}
          <span>&middot;</span>
          <span>{members.sites.length} Members</span>
        </div>
      </div>

      {/* ── Members ── */}
      <section className="mt-8">
        <div className="px-6 md:px-20 pb-4 flex items-center gap-4">
          <span className="text-[11px] tracking-[4px] uppercase text-light/50 font-mono">
            Members
          </span>
          <div className="w-8 h-[1px] bg-brass/40" />
        </div>

        <div className="flex flex-col">
          {members.sites.map((member, i) => (
            <motion.div
              key={member.website}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="member-row flex items-center justify-between px-6 md:px-20 py-5 border-b border-white/[0.06]"
            >
              <div className="flex items-center gap-3 shrink-0">
                {member.icon ? (
                  <img
                    src={member.icon}
                    alt={member.name}
                    className="w-9 h-9 object-cover shrink-0 border border-brass/30"
                  />
                ) : (
                  <div className="w-9 h-9 border border-brass/30 flex items-center justify-center shrink-0">
                    <span className="text-[11px] text-brass font-mono tracking-[1px]">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-light font-medium capitalize">
                    {member.name}
                  </span>
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-light/50 font-mono brass-underline"
                  >
                    {member.url}
                  </a>
                </div>
              </div>
              {member.description && (
                <span className="hidden md:block text-[13px] text-light/35 font-serif italic flex-1 px-4 truncate text-center">
                  {member.description}
                </span>
              )}
              <span className="text-[12px] text-light/50 font-mono tracking-[1px] shrink-0 text-right">
                {member.class}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Join Banner ── */}
      <section className="mx-6 md:mx-20 mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 md:p-8 border border-white/[0.08]">
          <a
            href="https://github.com/sym7534/tron-webring"
            className="bg-brass text-dark text-[10px] font-bold tracking-[2px] px-3 py-1 uppercase shrink-0 w-fit"
          >
            Open
          </a>
          <div className="flex flex-col gap-1">
            <span className="text-[13px] text-light/60 font-mono">
              The Tron Ring is open to all UWaterloo Mechatronics Engineering
              students and alumni.
            </span>
            <span className="text-[12px] text-light/35 font-mono">
              Add your site to members.json and open a PR to join.
            </span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mt-auto px-6 md:px-20 py-8 border-t border-white/[0.08] flex items-center justify-between">
        <span className="text-[11px] text-light/35 font-mono tracking-[1px]">
          TRONRING.COM
        </span>
        <span className="text-[11px] text-light/35 font-mono tracking-[1px]">
          UWATERLOO MECHATRONICS
        </span>
      </footer>

    </div>
  );
}
