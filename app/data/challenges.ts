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
        blurb: "collect data from & effectively communicate with all partnered pantries. Banks desire client data from their partnered pantries in order to better understand and serve their community, but this data is often uncollected or sequestered at the pantry level. Instead of having a streamlined way of maintaining regular communication with their partner agencies, many food banks still rely on personnel to handle relationships with dozens of such pantries each - a strenuous, and inefficient process.",
        image: "/fb-challenge.webp",
        bgColor: 'green.100'
    },
    {
        title: "Food Pantries",
        accordianTitle: "are faced with",
        blurb: "difficulty in getting and retaining volunteers, maintaining engagement with their donor base, applying to pertinent grants, and replacing phone calls/emails/paperwork with one intuitive digital experience.",
        image: "/fp-challenge.webp",
        bgColor: 'green.200'
    },
    {
        title: "The Community",
        accordianTitle: "is left helpless due to",
        blurb: "the dearth of up-to-date information, having to wait in haphazard lines, and inconsistencies at large. In the end, they're put off by the undignified experience they face.",
        image: "/community-challenge.webp",
        bgColor: 'green.100'
    }
]