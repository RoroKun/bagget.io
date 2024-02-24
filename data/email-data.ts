export interface infoData {
    name: string;
    from: string;
    subject: string;
    message: string;
}

type subject = { [key: string]: string };

export const subjects: subject = {
    subject1: "Request in Interview",
    subject2: "Question Regarding team",
    subject3: "Other"
}

