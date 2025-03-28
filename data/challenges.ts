import { CHALLENGE } from "./utility/types";

export const challengesData: CHALLENGE[] = [
    {
        stakeholder: "Food Banks",
        title: "struggle to...",
        blurb: [
            "Collect and understand data to better serve the community",
            "Heavy reliance on understaffed personnel to communicate with partner agencies, resulting in long lead times & lost relationships"
        ],
        image: "/fb-challenge.webp",
        bgColor: 'linear(to-bl, green.800 30%, bgGreen.700 70%)',
        highlightGradient: 'bg-gradient-to-br from-green-950 to-emerald-950'
    },
    {
        stakeholder: "Food Pantries",
        title: "are faced with...",
        blurb: [
            "Difficulty in getting and retaining volunteers",
            "Maintaining engagement with their donor base",
            "Manually applying to lengthy grant applications",
            "Replacing phone calls/emails/paperwork with one intuitive digital experience",
        ],
        image: "/pantry-image.webp",
        bgColor: 'linear(to-tr, green.800 30%, bgGreen.700 70%)',
        highlightGradient: 'bg-gradient-to-tl from-green-950 to-emerald-950'
    },
    {
        stakeholder: "Volunteers",
        title: "grapple with...",
        blurb: [
            "Finding locations near them that best accommodate their busy schedules",
            "Struggling during the service due to being trained day of",
            "Feel rewarded for the effort they put into their pantry",
        ],
        image: "/v-challenge.webp",
        bgColor: 'linear(to-tr, green.800 30%, bgGreen.700 70%)',
        highlightGradient: 'bg-gradient-to-bl from-green-950 to-emerald-950'
    },
    {
        stakeholder: "The Community",
        title: "is left helpless due to...",
        blurb: [
            "The lack of up-to-date information about their local pantries and food agencies",
            "Inevitably long & haphazard lines at distribution locations due to poor client scheduling and slow intakes",
            "Vastly varied check-in procedures pantry to pantry",
        ],image: "/community-challenge.webp",
        bgColor: 'linear(to-tl, green.800 30%, bgGreen.700 70%)',
        highlightGradient: 'bg-gradient-to-tr from-green-950 to-emerald-950'
    }
]