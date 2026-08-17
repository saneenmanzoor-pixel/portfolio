/**
 * JsonLd.jsx — Structured Data (JSON-LD) for Google's Knowledge Graph
 *
 * SEO IMPACT:
 *  - Person schema: Teaches Google that "Saneen Manzoor" = this URL.
 *    Eligibility for a Knowledge Panel in search results.
 *  - ProfilePage schema: Signals this is a portfolio/profile page type;
 *    improves entity understanding and sitelinks.
 *  - WebSite + SearchAction: Enables Google Sitelinks Searchbox in SERPs.
 *  - sameAs: Cross-links your social profiles into one entity cluster —
 *    the single strongest name-authority signal available for personal branding.
 */

import { Helmet } from "react-helmet-async";

const SITE_URL = "https://saneenmanzoor.vercel.app";

// ── Update sameAs with your real profile URLs ──────────────────────────────
const SOCIAL_PROFILES = [
  "https://github.com/saneenmanzoor-pixel",           // ← confirmed from your code
  "https://www.linkedin.com/in/saneenmanzoor",        // ← update if different
  "https://www.behance.net/saneenmanzoor",            // ← confirmed from your projects
  "https://twitter.com/saneenmanzoor",                // ← update with real handle
];

// Derived from your actual Skills section in skills.jsx
const KNOWS_ABOUT = [
  "React JS",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "Framer Motion",
  "Tailwind CSS",
  "Figma",
  "Adobe XD",
  "UI/UX Design",
  "Responsive Web Design",
  "Frontend Development",
  "Git",
  "GitHub",
  "VS Code",
];

export default function JsonLd() {
  // ── 1. Person Schema ───────────────────────────────────────────────────
  // Core entity definition. Google uses this to build the Knowledge Panel.
  const personSchema = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,       // stable IRI anchor for the entity
    name: "Saneen Manzoor",
    givenName: "Saneen",
    familyName: "Manzoor",
    url: SITE_URL,
    jobTitle: "Frontend Developer",
    description:
      "Frontend Developer specializing in React JS, responsive UI, and UI/UX Design. Building modern web experiences.",
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/profile.webp`,
      width: 800,
      height: 800,
    },
    sameAs: SOCIAL_PROFILES,           // links all your profiles as one entity
    knowsAbout: KNOWS_ABOUT,
    nationality: {
      "@type": "Country",
      name: "Pakistan",
    },
  };

  // ── 2. ProfilePage Schema ─────────────────────────────────────────────
  // Wraps the page itself; signals to Google this is a profile/portfolio page.
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: "Saneen Manzoor – Frontend Developer Portfolio",
    description:
      "Portfolio of Saneen Manzoor, a Frontend Developer specializing in React JS and UI/UX Design.",
    inLanguage: "en-US",
    dateModified: new Date().toISOString().split("T")[0], // today's date = fresh content signal
    mainEntity: personSchema,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
  };

  // ── 3. WebSite Schema ─────────────────────────────────────────────────
  // SearchAction enables Google Sitelinks Searchbox in results for your name.
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Saneen Manzoor",
    description: "Personal portfolio of Saneen Manzoor, Frontend Developer.",
    inLanguage: "en-US",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };

  return (
    <Helmet>
      {/* ProfilePage schema (includes nested Person) */}
      <script type="application/ld+json">
        {JSON.stringify(profilePageSchema, null, 0)}
      </script>
      {/* WebSite schema (separate graph node) */}
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema, null, 0)}
      </script>
    </Helmet>
  );
}
