// ============================================================
//  SITE CONTENT CONFIG
//  This is the only file you need to edit to update copy or links.
//  main.js reads from `profile` and renders the full page.
// ============================================================

var profile = {

  // ---- Identity -------------------------------------------------------
  name: "Alex Johnson",

  // Status badge shown in the hero. Set to null to hide.
  status: null,

  // ---- Hero -----------------------------------------------------------
  headline: "Consumer subscription PM turned AI product builder",
  tagline:  "I've shipped mobile products at scale across onboarding, engagement, retention, and growth — and now I'm building AI-native products hands-on.",

  // ---- Links (update these!) ------------------------------------------
  links: {
    linkedin: "#",                        // e.g. "https://linkedin.com/in/yourhandle"
    github:   "https://github.com/djohnsonalex",
  },

  // ---- Product Background ---------------------------------------------
  background: {
    title: "Product Background",
    intro:  "Consumer product leader with experience across the full funnel — from first launch to scaled growth.",
    highlights: [
      "Led mobile product across onboarding, activation, engagement, retention, and experimentation at a consumer subscription company",
      "Shipped features used by millions of users across iOS and Android",
      "Drove measurable lift in trial conversion, early engagement, and long-term retention",
      "Partnered with engineering, design, data science, and marketing to define roadmap and execute at pace",
      "Comfortable owning strategy and getting into the details — PRDs, A/B test design, sprint planning, stakeholder alignment",
    ],
  },

  // ---- AI Projects section header -------------------------------------
  aiSection: {
    label: "AI Product Work",
    title: "Building AI-native products",
    intro:  "Hands-on product building — not just spec-writing, but coding, shipping, and iterating on real products.",
  },

  // ---- Projects -------------------------------------------------------
  // To add a project: copy one object below, paste it into the array, and fill in fields.
  // Set `github` to null to hide the GitHub link.
  projects: [
    {
      title:       "fAI Workout",
      icon:        "💪",
      description: "AI-generated HIIT and strength workouts personalized to equipment, duration, intensity, and workout history. Built end-to-end as a solo product builder.",
      tags:        ["AI Product", "iOS", "Consumer", "Subscription"],
      caseStudy:   "#",   // link to case study page
      github:      null,  // no public repo — set to URL string to show link
    },
    {
      title:       "Tembric",
      icon:        "⚡",
      description: "Open-source prompt management and LLM routing concept for lean product teams and AI-enabled builders. Designed for local-first, low-overhead workflows.",
      tags:        ["LLM Tooling", "Open Source", "Prompt Management", "Local-first"],
      caseStudy:   "#",
      github:      "#",   // link to GitHub repo
    },
  ],


};
