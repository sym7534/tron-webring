"use client";

import { useEffect } from "react";

type Site = {
  name: string;
  website: string;
  description?: string;
};

function formatUrl(url: string): string {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "")
    .toLowerCase();
}

function findSiteIndex(sites: Site[], rawSite: string): number {
  const target = formatUrl(rawSite);
  return sites.findIndex((site) => {
    const siteUrl = formatUrl(site.website);
    return siteUrl.includes(target) || target.includes(siteUrl);
  });
}

export default function WebringNavigator({ sites }: { sites: Site[] }) {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const [rawSite, params] = hash.split("?");
    const nav = new URLSearchParams(params).get("nav");

    if (!nav) return;

    const siteIndex = findSiteIndex(sites, rawSite);
    if (siteIndex === -1) return;

    const increment = nav === "prev" ? -1 : 1;
    let newIndex = (siteIndex + increment) % sites.length;
    if (newIndex < 0) newIndex = sites.length - 1;

    window.location.href = sites[newIndex].website;
  }, [sites]);

  return null;
}
