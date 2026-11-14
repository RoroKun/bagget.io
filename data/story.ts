export type Milestone = { title: string; place: string; date: string; image: string; width: number; height: number }

export const MILESTONES: Milestone[] = [
  { title: "Inaugural Engineering Social Justice Competition", place: "CSU, Fullerton", date: "3/16/2023", image: "/framer/story/esj.png", width: 8256, height: 5504 },
  { title: "Student Research (SCAR) Day", place: "CSU, Fullerton", date: "4/17/2023", image: "/framer/story/scar-day.webp", width: 4032, height: 3024 },
  { title: "Sunstone", place: "San Jose", date: "5/5/2023", image: "/framer/story/sunstone.webp", width: 877, height: 676 },
  { title: "Titan Fast Pitch", place: "CSU, Fullerton", date: "11/11/2023", image: "/framer/story/titan-fast-pitch.webp", width: 800, height: 500 },
  { title: "SoCal Celebrates Entrepreneurship", place: "CSU, Fullerton", date: "3/9/2024", image: "/framer/story/socal-celebrates.webp", width: 2000, height: 1428 },
  { title: "Pando Sustainability Awards", place: "Cal Tech", date: "4/14/2024", image: "/framer/story/pando.webp", width: 4032, height: 2268 },
  { title: "Food Access 2024", place: "Sacramento", date: "5/16/2024", image: "/framer/story/food-access.webp", width: 2602, height: 2558 },
  { title: "Larta Institute Demo Day", place: "Los Angeles", date: "12/9/2024", image: "/framer/story/larta.webp", width: 2200, height: 1467 },
]

/**
 * Partner badges scattered around the story pills (desktop only). Coordinates are the badge
 * centre in px relative to the 1049px-wide pill column, measured from the Framer layout.
 */
export const PARTNER_BADGES = [
  { name: "CSU Fullerton", src: "/framer/story/icon-csuf.webp", x: 74, y: 287, rotate: -19 },
  { name: "Engineering Social Justice", src: "/framer/story/icon-esj.webp", x: 964, y: 327, rotate: 24 },
  { name: "SoCal Celebrates Entrepreneurship", src: "/framer/story/icon-scce.webp", x: 94, y: 567, rotate: -12 },
  { name: "Larta Institute", src: "/framer/story/icon-larta.webp", x: 904, y: 617, rotate: 13 },
  { name: "Pando", src: "/framer/story/icon-pando.webp", x: 104, y: 884, rotate: 30 },
  { name: "NSF I-Corps", src: "/framer/story/icon-icorp.webp", x: 934, y: 1206, rotate: 0 },
  { name: "Sunstone", src: "/framer/story/icon-sunstone.webp", x: 125, y: 1226, rotate: -15 },
  { name: "Cielo", src: "/framer/story/icon-cielo.png", x: 944, y: 1455, rotate: 30 },
]

export const TEAM = [
  {
    name: "Rohan Kunchala",
    role: "CEO",
    image: "/framer/story/rohan.webp",
    bio: "Rohan Kunchala a recent California State University, Fullerton graduate with a B.S. in computer science. Previously led a development team to create an augmented reality shopping experience for a furniture store. Has additional prior experience teaching data structures and algorithms at an organization on CSUF.",
    funFact: "My favorite bread is challah cuz yk, kun-CHALLAH get it?",
  },
  {
    name: "Alan Cortez",
    role: "CTO",
    image: "/framer/story/alan.webp",
    bio: "Alan Cortez a graduated with a B.S. and a M.S. in computer science from California State University, Fullerton graduate and Cal Poly Pomona respectively. His thesis optimized Food Bank delivery routes using metaheuristics to reduce food waste, and cost . Has prior experience teaching UI/UX concepts at an organization and developing at a Fin-Tech Startup.",
    funFact: "My favorite bread is foccacia and birote",
  },
]
