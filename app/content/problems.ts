export interface problemStuff {
  name: string;
  blurb: string;
  url: string;
}
export const problemData: problemStuff[] = [
  {
    name: "Food Banks",
    blurb: "struggle to communicate with their partnered pantries.",
    url: "/bankProblem.png",
  },
  {
    name: "Pantries",
    blurb: "receive unneeded supplies, leading to food wastage.",
    url: "/pantryProblem.png",
  },
  {
    name: "People",
    blurb: "are given an undignified experience, losing them in the process.",
    url: "/peopleProblem.png",
  },
];
