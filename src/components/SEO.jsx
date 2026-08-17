/**
 * SEO.jsx — Reusable head-tag manager using react-helmet-async
 *
 * SEO IMPACT:
 *  - <title>: Primary ranking signal for name-based queries ("Saneen Manzoor")
 *  - <meta description>: Appears as SERP snippet; drives click-through rate
 *  - <canonical>: Tells Google the authoritative URL, preventing duplicate penalties
 *  - Open Graph: Controls link previews on LinkedIn, WhatsApp, Slack (recruiter tools)
 *  - Twitter Cards: Rich media cards on Twitter/X when your URL is shared
 *  - robots meta: Explicit crawl permission; redundant with robots.txt but belt-and-suspenders
 */

import { Helmet } from "react-helmet-async";

const SITE_URL = "https://saneenmanzoor.vercel.app";
const SITE_NAME = "Saneen Manzoor";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`; // 1200×630 image in /public

export default function SEO({
  title = "Saneen Manzoor | Frontend Developer",
  description = "Frontend Developer specializing in React JS, UI/UX Design, and responsive web interfaces. View projects and hire Saneen Manzoor.",
  canonical = SITE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "@saneenmanzoor", // ← update with your real handle
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* ── Core Meta ──────────────────────────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {/* author tag helps Google associate this page with your name entity */}
      <meta name="author" content="Saneen Manzoor" />
      {/* robots: explicit allow for all crawlers, including GPTBot, Bingbot */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      {/* Google Search Console ownership verification */}
      <meta name="google-site-verification" content="tNQKvvzOVgz93aH2Ru2-Ph3JrNgUXxXHRFKx2HT0VZs" />


      {/* ── Canonical URL ─────────────────────────────────────────────────── */}
      {/* Canonical prevents Vercel preview deployments from diluting PageRank */}
      <link rel="canonical" href={canonical} />

      {/* ── Open Graph (Facebook, LinkedIn, WhatsApp, Slack) ──────────────── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} – Portfolio Preview`} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* ── Twitter / X Cards ─────────────────────────────────────────────── */}
      {/* summary_large_image = full-width image card in Twitter feed */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} – Portfolio Preview`} />

      {/* ── Mobile / PWA signals ──────────────────────────────────────────── */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
    </Helmet>
  );
}

/**
 * USAGE — Main Portfolio Landing Page:
 *   <SEO />
 *   (uses all defaults — ideal for the home/landing page)
 *
 * USAGE — Project Detail Page:
 *   <SEO
 *     title="Aether Travel Booking | Saneen Manzoor"
 *     description="React-based travel booking web app with responsive UI. Built by Saneen Manzoor."
 *     canonical="https://saneenmanzoor.vercel.app/#projects"
 *     ogImage="https://saneenmanzoor.vercel.app/projects/aether.webp"
 *   />
 */
