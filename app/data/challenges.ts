export interface challenge {
    title: string;
    accordianTitle: string;
    blurb: string;
    image: string;
    bgColor: string;
}


export const challengesData: challenge[] = [
    {
        title: "Food Banks",
        accordianTitle: "struggle to",
        blurb: "...collect data from & communicate with all partnered pantries. Instead of having a streamlined way of maintaining regular & comprehensive communication with their partner agencies, many food banks still rely on personnel to handle relationships with dozens of such pantries each - a strenuous, and inefficient process.",
        image: "/fb-challenge.webp",
        bgColor: 'green.100'
    },
    {
        title: "Food Pantries",
        accordianTitle: "are faced with",
        blurb: "redundant supplies - leading to wastage - whilst also not stocking the items their community wants. Despite evidence that the client-choice model provides a more dignifying experience for the community whilst generating less food waste, pantries often cannot adopt this model due to a dearth of quality software.",
        image: "/fp-challenge.webp",
        bgColor: 'green.200'
    },
    {
        title: "The Community",
        accordianTitle: "feels frustrated with",
        blurb: "...the difficulty to find info, being unable to schedule appointments in advance, and having no way of receiving updates. In the end, they turn away due to the substandard experience they face.",
        image: "/community-challenge.webp",
        bgColor: 'green.100'
    }
]