/**
 * News posts. Slugs, titles, categories and cover images mirror the Framer CMS.
 * Locations/links come from the previous site's data. Dates are intentionally not shown anywhere.
 * Newest first — add new posts to the top.
 */
export type NewsCategory = "Exhibition" | "Announcement" | "Event" | "Competition"

export type NewsPost = {
  slug: string
  title: string
  category: NewsCategory
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
    slug: "return-to-pando-days",
    title: "Return to Pando Days",
    category: "Exhibition",
    cover: "/framer/news/return-to-pando-days.webp",
    body: [
      "Bag/Get returned to present at Pando Days, marking another successful year with Pando. They showcased their software and shared their upcoming pilot plan for demonstrating the software in action.",
    ],
  },
  {
    slug: "larta-institute-demo-day",
    title: "Larta Institute Demo Day",
    category: "Exhibition",
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
    location: "CSU, Fullerton",
    cover: "/framer/news/titan-fast-pitch-all-star-panel.webp",
    body: [
      "We participated in the Titan Fast Pitch as past 1st place winners and were invited to speak on the All-Star Panel featuring former winners.",
    ],
    link: "https://csufentrepreneurship.com/meet-the-all-star-panel-at-the-titan-fast-pitch-finals-learn-from-innovators-whove-been-there-%f0%9f%8e%89/",
  },
  {
    slug: "csu-demo-day",
    title: "CSU Demo Day",
    category: "Exhibition",
    location: "CSU, Long Beach",
    cover: "/framer/news/csu-demo-day.webp",
    body: [
      "We pitched at CSU Demo Day at CSULB during LA Tech Week. Sponsored by Sunstone Community Fund, the event provided CSU founders like us an opportunity to showcase our initiatives, connect with investors, and receive valuable feedback.",
    ],
    link: "https://www.sunstoneinvestment.com/news/csu-demo-day-powered-by-sunstone-returns-to-cal-state-long-beach-this-month/",
  },
  {
    slug: "uci-nsf-i-corp",
    title: "UCI NSF I-CORP",
    category: "Announcement",
    cover: "/framer/news/uci-nsf-i-corp.jpg",
    body: [
      "Bag/Get was accepted into and completed the UCI ICORP program, where we learned the value of cold calling different pantries and gained new insights that reshaped our approach to our software.",
    ],
  },
  {
    slug: "food-access",
    title: "Food Access",
    category: "Event",
    location: "Sacramento",
    cover: "/framer/news/food-access.webp",
    heading: "Bag/Get Attends Food Access in Sacramento",
    body: [
      "To gain a deeper understanding of the food bank landscape, Bag/Get traveled to Sacramento for Food Access, a convention that brought together food banks and hunger relief organizations from across California. The event gave the team a rare opportunity to step outside the pitch room and connect directly with the people working on the front lines of food insecurity every day.",
      "Through conversations with food banks from across the state, the team came away with valuable insights that would shape the future of Bag/Get. One recurring theme was the growing need for better volunteer management, as many organizations rely heavily on volunteers to keep their operations running. The team also learned that food banks share a goal of creating a more unified network, which closely aligned with the vision Bag/Get had been working toward since its beginning.",
      "Another key takeaway was the importance of data. The team gained insight into the kinds of information these nonprofits want to track in order to measure their impact, set goals, and report on key performance indicators. Food banks made it clear that pantries are at the center of this effort, and that there is a growing need to capture accurate data at the ground level, where food actually reaches the community.",
      "These conversations helped confirm the direction of Bag/Get and highlighted new opportunities for the platform to support food banks and pantries alike.",
    ],
  },
  {
    slug: "the-pando-days-sustainability-awards",
    title: "The Pando Days Sustainability Awards",
    category: "Exhibition",
    location: "Cal Tech",
    cover: "/framer/news/the-pando-days-sustainability-awards.webp",
    body: [
      'To mark the completion of the Pando program, Bag/Get visited CalTech for Pando Populus hosted event and was honored with the "Earth Hero" Pando Sustainability Award.',
    ],
    link: "https://pandopopulus.com/pando-awards/",
  },
  {
    slug: "socal-celebrates-entrepreneurship",
    title: "SoCal Celebrates Entrepreneurship",
    category: "Competition",
    location: "CSU, Fullerton",
    cover: "/framer/news/socal-celebrates-entrepreneurship.webp",
    body: ["Bag/Get was honored to receive third place at SoCal Celebrates Entrepreneurs during the annual Lightning Pitch."],
    link: "https://www.socalentrepreneurship.org/scce-24",
  },
  {
    slug: "pando-days",
    title: "Pando Days",
    category: "Exhibition",
    cover: "/framer/news/pando-days.webp",
    body: ["Bag/Get team showcasing all the research and progress made since the program's inception."],
    link: "https://pandopopulus.com/programs/pando-days-23/schools-projects-23/cal-state-university-fullerton/",
  },
  {
    slug: "titan-fast-pitch",
    title: "Titan Fast Pitch",
    category: "Competition",
    location: "CSU, Fullerton",
    cover: "/framer/news/titan-fast-pitch.webp",
    body: ["Bag/Get secures first place in Titan Fast Pitch securing seed money to continue development."],
    link: "https://news.fullerton.edu/2023/12/student-entrepreneurs-take-first-place-for-food-bank-and-pantry-app/",
  },
  {
    slug: "csuf-incubator",
    title: "Bag/Get Joins The CSUF Incubator",
    category: "Announcement",
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
    location: "San Jose",
    cover: "/framer/news/sunstone-csu-startup-launch.webp",
    body: ["18 California State University campuses competed in the first CSU-wide startup launch at San José State University."],
    link: "https://csufentrepreneurship.com/csuf-students-make-social-impact-in-state-entrepreneurship-competition/",
  },
  {
    slug: "csuf-scar-day",
    title: "Student Research (SCAR) Day",
    category: "Exhibition",
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
    location: "CSU, Fullerton",
    cover: "/framer/news/where-it-all-began.webp",
    body: [
      'CSUF\'s inaugural "Engineering Social Justice: A Design Challenge" has students addressing real-world social issues and Bag/Get\'s first appearance to address food insecurity.',
    ],
    link: "https://news.fullerton.edu/2023/03/engineering-computing-students-pitch-solutions-to-social-justice-issues/",
  },
]

