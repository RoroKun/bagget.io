export interface problemStuff {
  name: string;
  blurb: string;
  blurbPT2: string;
  url: string;
  imgAlt: string;
}
export const problemData: problemStuff[] = [
  {
    name: "Food Banks",
    blurb:
      "struggle to collect data from & communicate with all partnered pantries.",
    blurbPT2:
      "Instead of having a streamlined way of maintaining regular & comprehensive communication w/ their partner agencies, many food banks still rely on personnel to handle relationships with dozens of such pantries each - a strenuous, and inefficient process.",
    url: "/bankProblem.webp",
    imgAlt:
      "Woman visibly distraught managing papers to symbolize the struggle Food Banks have.",
  },
  {
    name: "Pantries",
    blurb:
      "receive redundant supplies - leading to wastage - whilst also not stocking the items their community wants.",
    blurbPT2:
      "Despite evidence that the client-choice model provides a more dignifying experience for the community whilst generating less food waste, pantries often cannot adopt this model due to a dearth of quality software.",
    url: "/pantryProblem.webp",
    imgAlt:
      "Piles of filled up garbage bags on the side of the road to illustrate the food wastage that occurs.",
  },
  {
    name: "People",
    blurb:
      "People feel frustrated with difficulty finding info, being unable to schedule appointments in advance, and having no way of receiving updates.",
    blurbPT2:
      "In the end, they turn away due to the substandard experience they face.",
    url: "/peopleProblem.webp",
    imgAlt: "Young adult walking away from the camera in a lonely world.",
  },
];
