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
  headline: "Consumer PM and AI product builder",
  tagline:  "I've shipped mobile products at scale across onboarding, engagement, retention, and growth, and now I'm building AI-native products hands-on.",

  // ---- Links (update these!) ------------------------------------------
  links: {
    linkedin: "https://www.linkedin.com/in/alex-johnson-product-manager/",
    github:   "https://github.com/djohnsonalex",
  },

  // ---- Experience (company cards) ------------------------------------
  experience: {
    label: "Experience",
    title: "Product Background",
    intro:  "Consumer product leader with experience across the full funnel, from first launch to scaled growth.",
    companies: [
      {
        name:        "Dribbleup",
        subtitle:    null,   // set to a string to show a company/context line below the name
        description: "Led mobile product for a connected sports training platform, owning features across onboarding, training programs, and engagement for consumer athletes.",
        tags:        ["Consumer", "Mobile", "iOS & Android", "Hardware + Software"],
        url:         "https://dribbleup.com",
        urlLabel:    "Visit site",
      },
      {
        name:        "War Dragons",
        subtitle:    "Pocket Gems",   // shown below the product name
        description: "Led product on a top-grossing free-to-play mobile RPG, focused on live events, retention, monetization, and cross-functional execution across design, engineering, and data.",
        tags:        ["Mobile Gaming", "Free-to-Play", "iOS & Android", "Live Ops"],
        url:         "https://apps.apple.com/us/app/war-dragons/id958763157",   // paste the War Dragons App Store link here
        urlLabel:    "App Store",
      },
    ],
  },

  // ---- AI Projects section header -------------------------------------
  aiSection: {
    label: "AI Product Work",
    title: "Building AI-native products",
    intro:  "Hands-on product building: not just spec-writing, but coding, shipping, and iterating on real products.",
  },

  // ---- Projects -------------------------------------------------------
  // To add a project: copy one object below, paste it into the array, and fill in fields.
  // Set `github` to null to hide the GitHub link.
  projects: [
    {
      title:       "fAI Workout",
      description: "AI-generated HIIT and strength workouts personalized to equipment, duration, intensity, and workout history. Built end-to-end as a solo product builder.",
      tags:        ["AI Product", "iOS", "Consumer", "Subscription"],
      url:         "https://fai-workout.com/",
      github:      null,  // no public repo — set to URL string to show link
    },
    {
      title:       "Tembric",
      description: "Open-source prompt management and LLM routing concept for lean product teams and AI-enabled builders. Designed for local-first, low-overhead workflows.",
      tags:        ["LLM Tooling", "Open Source", "Prompt Management", "Local-first"],
      url:         null,
      github:      "https://github.com/djohnsonalex/tembric",
    },
  ],


};
