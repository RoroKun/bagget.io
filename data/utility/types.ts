// Image
export interface IMAGE {
    url: string;
    alt: string;
}

// Typography
export type FONT_SIZE = 'biggest' | 
                        'big' | 
                        'small'

// Awards
export interface AWARD {
    eventName: string;
    location: string;
    date: string;
    placement: string;
    blurb: string;
    link?: string;
    img: string;
    imgAlt: string;
}

// News
export interface NEWS {
    title: string;
    location?: string;
    date: string;
    blurb: string;
    link?: string;
    image: IMAGE;
}


// Challenge
export interface CHALLENGE {
    stakeholder: string;
    title: string;
    blurb: string[];
    image: string;
    bgColor: string;
    highlightGradient: string;
}

// Stakeholders
export interface STAKEHOLDER {
    title: "Food Banks" | "Food Pantries" | "Volunteers" | "The Community";
    description: string;
    icon: string;
}  

// Team Member
export interface TEAM_MEMBER {
    name: string;
    title: string;
    email: string;
    linkedIn: string;
    blurb: string;
    image: string;
}

// Value Prop
export interface VALUE {
    title: string;
    description: string;
    icon: string;
}

// Partners 
export interface PARTNER {
    name: string;
    shortName?: string;
    icon: string;
}

// Email API
export interface INFO_DATA {
    name: string;
    from: string;
    subject: string;
    message: string;
    phone?: string;
}

type MEMBERS = { [key: string]: string };

export const members: MEMBERS = {
    rohan: "Rohan Kunchala",
    alan: "Alan Cortez"
}