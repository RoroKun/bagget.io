export interface problemStuff {
  name: string;
  blurb: string;
  url: string;
  imgAlt: string;
}
export const problemData: problemStuff[] = [
  {
    name: "Food Banks",
    blurb: "struggle to communicate with their partnered pantries.",
    url: "/bankProblem.webp",
    imgAlt: "Woman visibly distraught managing papers to symbolize the struggle Food Banks have."
  },
  {
    name: "Pantries",
    blurb: "receive unneeded supplies, leading to food wastage.",
    url: "/pantryProblem.webp",
    imgAlt: "Piles of filled up garbage bags on the side of the road to illustrate the food wastage that occurs."
  },
  {
    name: "People",
    blurb: "feel frustrated with difficulty finding info, being unable to schedule appointments in advance, and having no way of receiving updates. In the end, they turn away due to the substandard experience they face.",
    url: "/peopleProblem.webp",
    imgAlt: "Young adult walking away from the camera in a lonely world."
  },
];
