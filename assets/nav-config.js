/* =========================================================================
   NAV-CONFIG.JS
   The only file most people need to touch.

   It controls which guides exist, which roles see each one, which are
   "featured" (shown first) for each role, and extra header shortcuts.

   TO ADD A GUIDE:
   1. Save it as a .md file in the /guides folder.
   2. Copy a block below into SOP_LIBRARY (the guide list) and edit it.
   3. Save. The menu, search, home cards, and Previous / Next update on their own.

   The order of SOP_LIBRARY is the order of the left menu.
   ========================================================================= */

const SOP_LIBRARY = [
  /* ---------- Everyone ---------- */
  {
    id: "how-it-works",
    title: "How It Works",
    blurb: "The whole system on one page.",
    group: "Start here",
    file: "guides/how-it-works.md",
    roles: ["hr", "manager"],
    featured: ["hr", "manager"]
  },

  {
    id: "faq",
    title: "FAQ: What do I do?",
    blurb: "Got an automated email? Find out what to do.",
    group: "Start here",
    file: "guides/faq.md",
    roles: ["hr", "manager"],
    featured: ["hr", "manager"]
  },
  {
    id: "timeline",
    title: "Timeline: What Happens When",
    blurb: "What happens when, for each case type.",
    group: "Start here",
    file: "guides/timeline.md",
    roles: ["hr", "manager"],
    featured: ["hr", "manager"]
  },

  /* ---------- HR ---------- */
  {
    id: "hr-workspace",
    title: "HR Workspace Tour",
    blurb: "A tour of every page in the HR Workspace.",
    group: "HR tasks",
    file: "guides/hr-workspace.md",
    roles: ["hr"],
    featured: ["hr"]
  },
  {
    id: "start-a-case",
    title: "Case Management",
    blurb: "Kick off a new hire, a role change, or a departure.",
    group: "HR tasks",
    file: "guides/hr-start-a-case.md",
    roles: ["hr"],
    featured: ["hr"]
  },
  {
    id: "hr-follow-up",
    title: "Keeping Cases Moving",
    blurb: "Spot stalled steps and nudge the right person.",
    group: "HR tasks",
    file: "guides/hr-follow-up.md",
    roles: ["hr"],
    featured: ["hr"]
  },
  {
    id: "task-library",
    title: "Editing the Task Library",
    blurb: "Change the master list every case copies.",
    group: "HR tasks",
    file: "guides/hr-task-library.md",
    roles: ["hr"],
    featured: []
  },

  /* ---------- Managers ---------- */
  {
    id: "manager-checklist",
    title: "New Hire Checklist",
    blurb: "Every step for a new Start-Up hire, in order.",
    group: "Manager tasks",
    file: "guides/manager-checklist.md",
    roles: ["manager", "hr"],
    featured: ["manager"]
  },
  {
    id: "manager-workspace",
    title: "Manager Workspace Tour",
    blurb: "A tour of your Triage, drafts, and settings.",
    group: "Manager tasks",
    file: "guides/manager-workspace.md",
    roles: ["manager"],
    featured: ["manager"]
  },
  {
    id: "sending-requests",
    title: "Sending Requests",
    blurb: "Send early with Quick Deploy, or review drafts first.",
    group: "Manager tasks",
    file: "guides/manager-sending-requests.md",
    roles: ["manager", "hr"],
    featured: ["manager"]
  },
  {
    id: "email-settings",
    title: "Your Email Settings",
    blurb: "Pick your send mode and which notices you get.",
    group: "Manager tasks",
    file: "guides/manager-email-settings.md",
    roles: ["manager", "hr"],
    featured: ["manager"]
  },

  /* ---------- Reference ---------- */
  {
    id: "definitions",
    title: "Definitions",
    blurb: "Plain-language meanings of every term.",
    group: "Reference",
    file: "guides/definitions.md",
    roles: ["hr", "manager"],
    featured: []
  },
  {
    id: "who-does-what",
    title: "Who Does What",
    blurb: "Which team owns which steps.",
    group: "Reference",
    file: "guides/who-does-what.md",
    roles: ["hr", "manager"],
    featured: []
  },
  {
    id: "emails",
    title: "Every Automated Email",
    blurb: "Every email the system sends, and why.",
    group: "Reference",
    file: "guides/emails.md",
    roles: ["hr", "manager"],
    featured: []
  }
];

// Full label shown in the sticky header for each role
const ROLE_LABELS = {
  hr: "HR",
  manager: "Manager"
};

// Quick links at the top of the left menu. Outside links also show as
// buttons on the role home page.
// Use file: for a guide, or url: for an outside link (opens in a new tab).
const ROLE_EXTRAS = {
  hr: [
    { label: "Start a case", file: "guides/hr-start-a-case.md" },
    { label: "Open HR Workspace ↗", url: "https://airtable.com/appe3ibHthgBJFYUs/pagb67uM6Sj2c2F8r" }
  ],
  manager: [
    { label: "Send requests", file: "guides/manager-sending-requests.md" },
    { label: "Open Manager Workspace ↗", url: "https://airtable.com/appe3ibHthgBJFYUs/pagBMobE9qylDhqsc" }
  ]
};

// One line about each role. Shown on the role home page.
const ROLE_BLURBS = {
  hr: "Start cases, approve role changes, and keep every case moving.",
  manager: "Your team's steps, your drafts, and what's due next."
};

// Each view links to the other one.
const ROLE_SWITCHER = {
  hr: ["manager"],
  manager: ["hr"]
};

// Used for the "Edit this page" link at the bottom of every guide.
const REPO = "crystal-jeffers/onboarding";
const BRANCH = "main";
