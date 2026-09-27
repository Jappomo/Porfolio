/* ===========================================================
   EDIT THIS FILE to update the site. No build step needed.

   Images: put them in assets/img/ and set `image` to the path.
   If an image is missing, a styled placeholder is shown instead.
   =========================================================== */

/* Experience timeline (newest first) */
const STUDIOS = [
  { name: "NARC Malta", dates: "2024 - Present", note: "Working on an unannounced MMORPG" },
  { name: "TLM (Endeva)", dates: "Jan 2023 - Dec 2023" },
  { name: "Sumo Digital - Sheffield", dates: "Apr 2021 - Jan 2023" },
  { name: "PlayMagic Ltd", dates: "Apr 2016 - Feb 2021" }
];

/* Contract / freelance clients */
const CLIENTS = ["TLM", "HyperReality LLC", "FTS Games", "nDreams", "PlayMagic"];

/* Released Work: grouped by company, groups shown oldest to newest.
   context = orange line, role = grey line. Tags drive the filter buttons. */
const WORK = [
  {
    company: "PlayMagic Ltd", dates: "2016 - 2021",
    projects: [
      { title: "Journey to Foundation", context: "Production", role: "3D Art Support", tags: ["VR"], image: "assets/img/journey-foundation.jpg" },
      { title: "Gumball Racing", context: "Full Development", role: "3D Modeler", tags: ["Mobile"], image: "assets/img/gumball.jpg" },
      { title: "Matt Hatter: Multiverse Hero", context: "Full Development", role: "Character Artist - Art TD", tags: ["Console", "PC"], image: "assets/img/matt-hatter.jpg" },
      { title: "American Ninja Warrior Challenge", context: "Pre Production - Vertical Slice", role: "Character Artist", tags: ["Console", "PC"], image: "assets/img/anw.jpg" },
      { title: "Arktika.1", context: "Porting and Expansion", role: "Character Artist", tags: ["VR"], image: "assets/img/arktika.jpg" },
      { title: "Metro Exodus", context: "DLC: The Two Colonels", role: "Props Modeler", tags: ["Console", "PC"], image: "assets/img/metro-exodus.jpg" },
      { title: "XIII Remake", context: "Full Production", role: "Character and Weapon Artist", tags: ["Console", "PC"], image: "assets/img/xiii.jpg" },
      { title: "Lost Ark", context: "Console Porting", role: "Technical Art Support", tags: ["Console"], image: "assets/img/lost-ark.jpg" }
    ]
  },
  {
    company: "Sumo Digital - Sheffield", dates: "2021 - 2023",
    projects: [
      { title: "Nizhan Future", context: "Early Development", role: "3D Weapon / HardSurface Artist", tags: ["PC"], image: "assets/img/nizhan.jpg" },
      { title: "SackBoy: A Big Adventure", context: "Content DLC 2021", role: "Additional 3D Modeler", tags: ["Console"], image: "assets/img/sackboy.jpg" }
    ]
  },
  {
    company: "TLM (Endeva)", dates: "2023",
    projects: [
      { title: "Frenzies VR", context: "Early Prototype Phase", role: "Modeler", tags: ["VR"], image: "assets/img/frenzies.jpg" },
      { title: "Call of Duty Mobile", context: "Season Content 2024", role: "Texture Artist", tags: ["Mobile"], image: "assets/img/cod-mobile.jpg" }
    ]
  },
  {
    company: "Contractor", dates: "Freelance",
    projects: [
      { title: "Legends of Meridian", context: "Production", role: "3D Modeler", tags: ["VR"], image: "assets/img/meridian.jpg" },
      { title: "Voltumna", context: "Pre-Production", role: "Technical Artist", tags: [], image: "assets/img/voltumna.jpg", fit: "contain" }
    ]
  }
];

/* Unannounced / unreleased, grouped by company (oldest first) */
const UNRELEASED = [
  {
    company: "PlayMagic Ltd",
    projects: [
      { title: "Stubbs The Zombie - Remake", image: "assets/img/nda.jpg" },
      { title: "Project Prodigy", image: "assets/img/nda.jpg" },
      { title: "Insectoids", image: "assets/img/nda.jpg" },
      { title: "Enigma Force", image: "assets/img/nda.jpg" },
      { title: "People Are Awesome", image: "assets/img/nda.jpg" }
    ]
  },
  {
    company: "Sumo Digital - Sheffield",
    projects: [
      { title: "2K Lego Goals!", image: "assets/img/lego-goals.jpg" },
      { title: "2K Lego Cadillac Project", image: "assets/img/nda.jpg" },
      { title: "Project RS", image: "assets/img/project-rs.jpg" },
      { title: "Project Carbon", image: "assets/img/nda.jpg" }
    ]
  }
];
