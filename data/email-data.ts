export interface infoData {
    name: string;
    from: string;
    subject: string;
    message: string;
}

type subject = { [key: string]: string };

export const subjects: subject = {
    interviewRequest: "Request in Interview",
    teamQuestion: "Question Regarding team",
    other: "Other"
}

export const subjectOptions = Object.keys(subjects)

export const xssRegex = /[<>"'&]/

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/