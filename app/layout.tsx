import type { Metadata } from "next";
import "./globals.css";
import members from "@/data/members.json";

export const metadata: Metadata = {
  title: "Webring",
  description: "A webring for friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sites = members.sites.map(s => s.website);

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
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: navScript }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
