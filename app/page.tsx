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
    <div className="min-h-screen flex flex-col">
      {/* ── Masthead ── */}
      <header className="flex items-center justify-between px-16 py-5 border-b border-[#E5E2DC]">
        <div className="flex items-center gap-3">
          <img src="/waterloo.png" alt="Waterloo" className="h-10" />
          <img src="/logoblack.png" alt="Tron Webring" className="h-10" />
          <span className="font-serif text-sm leading-tight">
            uwaterloo<br />tron webring
          </span>
        </div>
        <div className="flex items-center gap-4">
          {/* Join button */}
          <a
            href="https://github.com/sym7534/tron-webring"
            className="flex items-center gap-2 bg-[#1A1A1A] text-white px-4 py-2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span className="text-[11px] font-semibold tracking-[1px]">
              JOIN
            </span>
          </a>
          <a
            href="https://github.com/sym7534/tron-webring/tree/main/public"
            className="w-20 h-8 bg-[#E8E5DF] flex items-center justify-center text-[11px] font-semibold text-[#666] tracking-[1px]"
          >
            ASSETS
          </a>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section className="flex items-center px-16 py-10 overflow-hidden">
        <div className="flex flex-col gap-[18px] shrink">
          <h1 className="font-serif italic font-medium text-[72px] leading-[1.05] tracking-[-2px]">
            The Mechatronics{"\n"}Engineering Webring
          </h1>
          <p className="text-[16px] text-[#777] leading-[1.6] max-w-[480px]">
            A curated directory of personal websites by University of Waterloo
            Mechatronics Engineering graduates and students. Connecting Tron
            across every cohort.
          </p>
          <RandomSiteButton />
        </div>
        <div className="flex items-center justify-center shrink-0 ml-8">
          <img
            src="/faviconhq.png"
            alt=""
            className="w-[340px] h-[340px] object-contain rotate-[20deg]"
          />
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="px-16">
        <div className="py-2 border-t border-[#E5E2DC] flex items-center gap-6 text-[13px] text-[#777]">
          <span>Total members: <span className="text-[#1A1A1A] font-medium">{members.sites.length}</span></span>
          <span>Grad classes: <span className="text-[#1A1A1A] font-medium">{new Set(members.sites.map((s) => s.class)).size}</span></span>
        </div>
      </div>

      {/* ── Members Section ── */}
      <section className="px-16 mt-1">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pt-4 border-t border-[#E5E2DC]">
            <h2 className="font-serif italic font-semibold text-[22px] tracking-[0.5px]">
              Members
            </h2>
            <span className="text-[13px] text-[#777]">View all</span>
          </div>
          <div className="flex flex-col">
            {members.sites.map((member) => (
              <div
                key={member.website}
                className="flex items-center justify-between py-4 border-b border-[#E5E2DC]"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-8 h-8 bg-[#E8E5DF] flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-semibold text-[#666]">
                      {getInitials(member.name)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[13px] font-medium capitalize">
                      {member.name}
                    </span>
                    <a
                      href={member.website}
                      className="text-[13px] text-[#777] hover:text-[#1A1A1A]"
                    >
                      {member.url}
                    </a>
                  </div>
                </div>
                <span className="text-[13px] text-[#777] font-serif italic flex-1 px-4 truncate text-center">
                  {member.description}
                </span>
                <span className="text-[13px] text-[#777] font-medium shrink-0 text-right">
                  {member.class}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── Join Banner ── */}
      <section className="px-16 mt-10">
        <div className="flex items-center justify-between px-6 py-4 border border-[#E5E2DC]">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sym7534/tron-webring"
              className="bg-[#1A1A1A] text-white text-[9px] font-bold tracking-[1px] px-[10px] py-1"
            >
              OPEN
            </a>
            <span className="text-[13px] text-[#666]">
              The Tron Ring is open to all UWaterloo Mechatronics Engineering
              students and alumni. Add your personal website to join.
            </span>
          </div>
          {/* Close icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </section>

    </div>
  );
}
