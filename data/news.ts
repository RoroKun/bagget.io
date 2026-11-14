/**
 * News posts. Slugs, titles, categories and cover images mirror the Framer CMS.
 * Dates/locations/links come from the previous site's data (the Framer CMS still had placeholder dates).
 * Newest first — add new posts to the top.
 */
export type NewsCategory = "Exhibition" | "Announcement" | "Event" | "Competition"

export type NewsPost = {
  slug: string
  title: string
  category: NewsCategory
  /** ISO date (yyyy-mm-dd) */
  date: string
  location?: string
  cover: string
  /** Optional sub-heading at the top of the article body */
  heading?: string
  /** Article paragraphs */
  body: string[]
  /** External write-up about the event */
  link?: string
}

export const NEWS: NewsPost[] = [
  {
    slug: "pando-days-2024",
    title: "Pando Days 2024",
    category: "Exhibition",
    date: "2025-01-20",
    cover: "/framer/news/pando-days-2024.webp",
    body: [
      "Bag/Get returned to present at Pando Days, marking another successful year with Pando. They showcased their software and shared their upcoming pilot plan for demonstrating the software in action.",
    ],
  },
  {
    slug: "larta-institute-demo-day",
    title: "Larta Institute Demo Day",
    category: "Exhibition",
    date: "2024-12-09",
    location: "Los Angeles",
    cover: "/framer/news/larta-institute-demo-day.webp",
    body: [
      "Bag/Get pitched at Larta Demo Day, marking the completion of our involvement as a Larta Institute Venture Fellow. We showcased the progress we've made in our business model and prototype.",
    ],
    link: "https://larta.org/ECO/?trk=public_post-text",
  },
  {
    slug: "titan-fast-pitch---all-star-panel",
    title: "Titan Fast Pitch - All-Star Panel",
    category: "Exhibition",
    date: "2024-11-09",
    location: "CSU, Fullerton",
    cover: "/framer/news/titan-fast-pitch-all-star-panel.webp",
    body: [
      "In November, we participated in the Titan Fast Pitch as past 1st place winners and were invited to speak on the All-Star Panel featuring former winners.",
    ],
    link: "https://csufentrepreneurship.com/meet-the-all-star-panel-at-the-titan-fast-pitch-finals-learn-from-innovators-whove-been-there-%f0%9f%8e%89/",
  },
  {
    slug: "csu-demo-day",
    title: "CSU Demo Day",
    category: "Exhibition",
    date: "2024-10-17",
    location: "CSU, Long Beach",
    cover: "/framer/news/csu-demo-day.webp",
    body: [
      "Last October, we pitched at CSU Demo Day at CSULB during LA Tech Week '24. Sponsored by Sunstone Community Fund, the event provided CSU founders like us an opportunity to showcase our initiatives, connect with investors, and receive valuable feedback.",
    ],
    link: "https://www.sunstoneinvestment.com/news/csu-demo-day-powered-by-sunstone-returns-to-cal-state-long-beach-this-month/",
  },
  {
    slug: "uci-nsf-i-corp",
    title: "UCI NSF I-CORP",
    category: "Announcement",
    date: "2024-06-27",
    cover: "/framer/news/uci-nsf-i-corp.jpg",
    body: [
      "Bag/Get was accepted into and completed the UCI ICORP program, where we learned the value of cold calling different pantries and gained new insights that reshaped our approach to our software.",
    ],
  },
  {
    slug: "food-access-2024",
    title: "Food Access 2024",
    category: "Event",
    date: "2024-05-16",
    location: "Sacramento",
    cover: "/framer/news/food-access-2024.webp",
    heading: "Bag/Get Attends Food Access 2024 in Sacramento",
    body: [
      "To gain a deeper understanding of the food bank landscape, Bag/Get traveled to Sacramento for Food Access 2024, a convention that brought together food banks and hunger relief organizations from across California. The event gave the team a rare opportunity to step outside the pitch room and connect directly with the people working on the front lines of food insecurity every day.",
      "Through conversations with food banks from across the state, the team came away with valuable insights that would shape the future of Bag/Get. One recurring theme was the growing need for better volunteer management, as many organizations rely heavily on volunteers to keep their operations running. The team also learned that food banks share a goal of creating a more unified network, which closely aligned with the vision Bag/Get had been working toward since its beginning.",
      "Another key takeaway was the importance of data. The team gained insight into the kinds of information these nonprofits want to track in order to measure their impact, set goals, and report on key performance indicators. Food banks made it clear that pantries are at the center of this effort, and that there is a growing need to capture accurate data at the ground level, where food actually reaches the community.",
      "These conversations helped confirm the direction of Bag/Get and highlighted new opportunities for the platform to support food banks and pantries alike.",
    ],
  },
  {
    slug: "the-pando-days-sustainability-awards",
    title: "The Pando Days Sustainability Awards",
    category: "Exhibition",
    date: "2024-04-14",
    location: "Cal Tech",
    cover: "/framer/news/the-pando-days-sustainability-awards.webp",
    body: [
      'To mark the completion of the Pando 23-24 program, Bag/Get visited CalTech for Pando Populus hosted event and was honored with the "Earth Hero" Pando Sustainability Award.',
    ],
    link: "https://pandopopulus.com/pando-awards/",
  },
  {
    slug: "socal-celebrates-entrepreneurship",
    title: "SoCal Celebrates Entrepreneurship",
    category: "Competition",
    date: "2024-03-09",
    location: "CSU, Fullerton",
    cover: "/framer/news/socal-celebrates-entrepreneurship.webp",
    body: ["Bag/Get was honored to receive third place at SoCal Celebrates Entrepreneurs during the annual Lightning Pitch."],
    link: "https://www.socalentrepreneurship.org/scce-24",
  },
  {
    slug: "pando-days",
    title: "Pando Days 2023",
    category: "Exhibition",
    date: "2023-12-09",
    cover: "/framer/news/pando-days.webp",
    body: ["Bag/Get team showcasing all the research and progress made since the program's inception."],
    link: "https://pandopopulus.com/programs/pando-days-23/schools-projects-23/cal-state-university-fullerton/",
  },
  {
    slug: "titan-fast-pitch",
    title: "Titan Fast Pitch",
    category: "Competition",
    date: "2023-11-11",
    location: "CSU, Fullerton",
    cover: "/framer/news/titan-fast-pitch.webp",
    body: ["Bag/Get secures first place in Titan Fast Pitch securing seed money to continue development."],
    link: "https://news.fullerton.edu/2023/12/student-entrepreneurs-take-first-place-for-food-bank-and-pantry-app/",
  },
  {
    slug: "csuf-incubator",
    title: "Bag/Get Joins The CSUF Incubator",
    category: "Announcement",
    date: "2023-06-01",
    location: "CSU, Fullerton",
    cover: "/framer/news/csuf-incubator.webp",
    body: [
      "Bag/Get received an in-kind donation to join the CSUF Startup Incubator, working alongside their mentor, Jeff Greenberg, to elevate their business to the next level.",
    ],
  },
  {
    slug: "sunstone-csu-startup-launch",
    title: "Sunstone CSU Startup Launch",
    category: "Competition",
    date: "2023-05-05",
    location: "San Jose",
    cover: "/framer/news/sunstone-csu-startup-launch.webp",
    body: ["18 California State University campuses competed in the first CSU-wide startup launch at San José State University."],
    link: "https://csufentrepreneurship.com/csuf-students-make-social-impact-in-state-entrepreneurship-competition/",
  },
  {
    slug: "csuf-scar-day",
    title: "Student Research (SCAR) Day",
    category: "Exhibition",
    date: "2023-04-17",
    location: "CSU, Fullerton",
    cover: "/framer/news/csuf-scar-day.webp",
    body: [
      "CSUF's SCAR Day: Students showcase research, creativity, and scholarship, fostering a community celebration of accomplishments across all disciplines. Bag/Get presented their first iteration mockups and proof of concept for the software.",
    ],
  },
  {
    slug: "where-it-all-began",
    title: "Where It All Began - Engineering Social Justice Competition",
    category: "Competition",
    date: "2023-03-16",
    location: "CSU, Fullerton",
    cover: "/framer/news/where-it-all-began.webp",
    body: [
      'CSUF\'s inaugural "Engineering Social Justice: A Design Challenge" has students addressing real-world social issues and Bag/Get\'s first appearance to address food insecurity.',
    ],
    link: "https://news.fullerton.edu/2023/03/engineering-computing-students-pitch-solutions-to-social-justice-issues/",
  },
]

export function formatNewsDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}
