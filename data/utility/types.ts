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
    title: "Food Banks" | "Food Pantries" | "The Community";
    description: string;
}  

// Team Member
export interface TEAM_MEMBER {
    name: string;
    title: string;
    email: string;
    linkedIn: string;
    image: string;
}

// Value Prop
export interface VALUE_PROP {
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