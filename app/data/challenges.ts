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
        blurb: "collect data & effectively communicate with partnered pantries. Banks desire client data from partnered pantries in order to understand and serve their community, but this data is often lost or withheld. Instead of having streamlined communication with partner agencies, many food banks still rely on personnel to handle relationships with dozens of other pantries - a strenuous and inefficient process.",
        image: "/fb-challenge.webp",
        bgColor: 'green.100'
    },
    {
        title: "Food Pantries",
        accordianTitle: "are faced with",
        blurb: "difficulty in getting and retaining volunteers, maintaining engagement with their donor base, manually applying to lengthy grant applications, and replacing phone calls/emails/paperwork with one intuitive digital experience.",
        image: "/fp-challenge.webp",
        bgColor: 'green.200'
    },
    {
        title: "The Community",
        accordianTitle: "is left helpless due to",
        blurb: "the lack of up-to-date information, having to wait in haphazard lines, and inconsistencies at large. In the end, they're put off by the undignified experience they face.",
        image: "/community-challenge.webp",
        bgColor: 'green.100'
    }
]