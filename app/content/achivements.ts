export interface awardData {
  eventName: string;
  location: string;
  date: string;
  placement: string;
  blurb: string;
  link?: string;
  img: string;
}

export const awardsData: awardData[] = [
  {
    eventName: "Engineering Social Justice",
    location: "CSU, Fullerton",
    date: "3/16/2023",
    placement: "1st place",
    blurb:
      "CSUF's inaugural \"Engineering Social Justice: A Design Challenge\" has students addressing real-world social issues and Bag/Get's first appearance to address food insecurity.",
    link: "https://news.fullerton.edu/2023/03/engineering-computing-students-pitch-solutions-to-social-justice-issues/",
    img: "/esj.jpg",
  },
  {
    eventName: "SCAR Day",
    location: "CSU, Fullerton",
    date: "4/17/2023",
    placement: "1st place",
    blurb:
      "CSUF's SCAR Day: Students showcase research, creativity, and scholarship, fostering a community celebration of accomplishments across all disciplines.",
    img: "/scarday.jpg",
  },
  {
    eventName: "Sunstone",
    location: "San Jose",
    date: "5/5/2023",
    placement: "3rd place",
    blurb:
      "18 CSU campuses competed in the first CSU-wide startup launch at San José State University on May 5, 2023.",
    link: "https://csufentrepreneurship.com/csuf-students-make-social-impact-in-state-entrepreneurship-competition/",
    img: "/sj.jpg",
  },
];
