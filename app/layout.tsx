import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import members from "@/data/members.json";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tron Ring",
  description:
    "A curated directory of personal websites by University of Waterloo Mechatronics Engineering graduates and students.",
  icons: {
    icon: "/faviconmaxsize.png",
    apple: "/faviconmaxsize.png",
  },
  openGraph: {
    title: "Tron Ring",
    description:
      "A curated directory of personal websites by University of Waterloo Mechatronics Engineering graduates and students.",
    url: "https://tronring.com",
    siteName: "Tron Ring",
    images: [
      {
        url: "/faviconhq.png",
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tron Ring",
    description:
      "A curated directory of personal websites by University of Waterloo Mechatronics Engineering graduates and students.",
    images: ["/faviconhq.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sites = members.sites.map((s) => s.website);

  // javscript script that runs before rendering the actual page to redirect
  const navScript = `
    (function() {
      var sites = ${JSON.stringify(sites)};
      var hash = window.location.hash.slice(1);
      if (!hash) return;

      var parts = hash.split("?");
      var rawSite = parts[0];
      var params = new URLSearchParams(parts[1] || "");
      var nav = params.get("nav");

      if (!nav) return;

      function formatUrl(url) {
        return url.replace(/^https?:\\/\\//, "").replace(/^www\\./, "").replace(/\\/$/, "").toLowerCase();
      }

      var target = formatUrl(rawSite);
      var siteIndex = sites.findIndex(function(site) {
        var siteUrl = formatUrl(site);
        return siteUrl.includes(target) || target.includes(siteUrl);
      });

      if (siteIndex === -1) return;

      var increment = nav === "prev" ? -1 : 1;
      var newIndex = (siteIndex + increment) % sites.length;
      if (newIndex < 0) newIndex = sites.length - 1;

      window.location.replace(sites[newIndex]);
    })();
  `;

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: navScript }} />
      </head>
      <body className="font-sans bg-[#FDFCF9] text-[#1A1A1A] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
