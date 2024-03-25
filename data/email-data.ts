export interface infoData {
    name: string;
    from: string;
    subject: string;
    message: string;
    phone?: string;
}

type members = { [key: string]: string };
type memberEmails = { [key: string]: string };

export const members: members = {
    rohan: "Rohan Kunchala",
    alan: "Alan Cortez",
    cesar: "Cesar Rojas",
    michael: "Michael Chhun",
}

export const xssRegex = /[<>&\\]/

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const phoneRegex = /^(\+?\d{1,2}?[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/