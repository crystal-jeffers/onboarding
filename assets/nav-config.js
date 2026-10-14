/* =========================================================================
   NAV-CONFIG.JS
   The only file most people need to touch.

   It controls which guides exist, which roles see each one, which are
   "featured" (shown first) for each role, and extra header shortcuts.

   TO ADD A GUIDE:
   1. Save it as a .md file in the /guides folder.
   2. Copy a block below into SOP_LIBRARY (the guide list) and edit it.
   ========================================================================= */

const SOP_LIBRARY = [
  /* ---------- Everyone ---------- */
  {
    id: "how-it-works",
    title: "How It Works",
    file: "guides/how-it-works.md",
    roles: ["hr", "manager"],
    featured: ["hr", "manager"]
  },

  {
    id: "faq",
    title: "FAQ: What Is This Email and What Do I Do?",
    file: "guides/faq.md",
    roles: ["hr", "manager"],
    featured: ["hr", "manager"]
  },

  /* ---------- HR ---------- */
  {
    id: "start-a-case",
    title: "Start an Onboarding, Role Change or Offboarding",
    file: "guides/hr-start-a-case.md",
    roles: ["hr"],
    featured: ["hr"]
  },
  {
    id: "hr-workspace",
    title: "HR Workspace Tour",
    file: "guides/hr-workspace.md",
    roles: ["hr"],
    featured: ["hr"]
  },
  {
    id: "hr-follow-up",
    title: "Keeping Cases Moving",
    file: "guides/hr-follow-up.md",
    roles: ["hr"],
    featured: ["hr"]
  },
  {
    id: "task-library",
    title: "Editing the Task Library",
    file: "guides/hr-task-library.md",
    roles: ["hr"],
    featured: []
  },

  /* ---------- Managers ---------- */
  {
    id: "manager-checklist",
    title: "Manager Checklist: New Start-Up Hire",
    file: "guides/manager-checklist.md",
    roles: ["manager", "hr"],
    featured: ["manager"]
  },
  {
    id: "manager-workspace",
    title: "Manager Workspace Tour",
    file: "guides/manager-workspace.md",
    roles: ["manager"],
    featured: ["manager"]
  },
  {
    id: "sending-requests",
    title: "Sending Requests (Quick Deploy & Draft Queue)",
    file: "guides/manager-sending-requests.md",
    roles: ["manager", "hr"],
    featured: ["manager"]
  },
  {
    id: "email-settings",
    title: "Your Email Settings",
    file: "guides/manager-email-settings.md",
    roles: ["manager", "hr"],
    featured: ["manager"]
  },

  /* ---------- Reference ---------- */
  {
    id: "timeline",
    title: "Timeline: What Happens When",
    file: "guides/timeline.md",
    roles: ["hr", "manager"],
    featured: ["hr", "manager"]
  },
  {
    id: "definitions",
    title: "Definitions",
    file: "guides/definitions.md",
    roles: ["hr", "manager"],
    featured: []
  },
  {
    id: "emails",
    title: "Every Automated Email",
    file: "guides/emails.md",
    roles: ["hr", "manager"],
    featured: []
  },
  {
    id: "who-does-what",
    title: "Who Does What",
    file: "guides/who-does-what.md",
    roles: ["hr", "manager"],
    featured: []
  }
];

// Full label shown in the sticky header for each role
const ROLE_LABELS = {
  hr: "HR",
  manager: "Manager"
};

// Extra shortcut buttons that appear only in a given role's header.
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
