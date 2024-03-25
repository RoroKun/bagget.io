export interface challenge {
    title: string;
    blurb: string[];
    image: string;
    bgColor: string;
}

export const challengesData: challenge[] = [
    {
        title: "Food Banks struggle to...",
        blurb: [
            "Collect and understand data to better serve the community",
            "Heavy reliance on understaffed personnel to communicate with partner agencies, resulting in long lead times & lost relationships"
        ],
        image: "/fb-challenge.webp",
        bgColor: 'green.100'
    },
    {
        title: "Food Pantries are faced with...",
        blurb: [
            "Difficulty in getting and retaining volunteers",
            "Maintaining engagement with their donor base",
            "Manually applying to lengthy grant applications",
            "Replacing phone calls/emails/paperwork with one intuitive digital experience",
        ],
        image: "/fp-challenge.webp",
        bgColor: 'green.200'
    },
    {
        title: "The Community is left helpless due to...",
        blurb: [
            "The lack of up-to-date information about their local pantries and food agencies",
            "Inevitably long & haphazard lines at distribution locations due to poor client scheduling and slow intakes",
            "Vastly varied check-in procedures pantry to pantry",
        ],image: "/community-challenge.webp",
        bgColor: 'green.100'
    }
]